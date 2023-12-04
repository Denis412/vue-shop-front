<template>
    <input type="file" accept="image/*" @change="onFileChange" />
</template>

<script setup>
import { ref } from 'vue';
import { supabase } from '@shared';
import { v4 as uuidv4 } from 'uuid';

const emit = defineEmits(['updateUrl']);

const imageUrl = ref('');

const onFileChange = async (event) => {
    try {
        const ext = event.target.files[0].name.split('.')[1];
        const fileName = `${uuidv4()}.${ext}`;

        const { error } = await supabase.storage
            .from('files')
            .upload(fileName, event.target.files[0]);

        if (error) throw error;

        imageUrl.value =
            import.meta.env.VITE_SUPABASE_URL + '/storage/v1/object/public/files/' + fileName;

        emit('updateUrl', imageUrl.value);
    } catch (error) {
        console.log(error);
    }
};
</script>
