<template>
    <div>
        <h2>{{text}}</h2>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        text: {
            default: ""
        }
    }
}
</script>

