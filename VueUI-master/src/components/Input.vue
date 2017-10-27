<template>
    <div class="input-group">
        <slot></slot>
        <input type="text" class="form-control" :placeholder="text">
        <slot name="right"></slot>
    </div>
</template>
<script>
    export default {
        props: {
            text:{
                default: ""
            }
        }
    }
</script>
