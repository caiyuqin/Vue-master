<template>
    <div class="bs-callout" :class="tip">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        tip: {
            default: "bs-callout-success"
        }
    }
}
</script>

 