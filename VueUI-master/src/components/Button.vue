<template>
	<button class="btn" type="button" :class="btn" @click="btnClick">
    <slot></slot>
  </button>
</template>
<script>
	export default {
		name: "Button",
		props: {
			text: {
				default: "确定"
			},
			btn: {
				default: "btn-default"
			},
			show: {
				default: ""
			},
			hide: {
				default: ""
			}
		},
		methods: {
			btnClick() {
				if(this.show && this.hide) {
					this.$store.commit({
						type: 'modalChange',
						modaltarget: "hideAndShow",
						modalId: this.show
					})
				} else if(this.show) {
					this.$store.commit({
						type: 'modalChange',
						modaltarget: "showModal",
						modalId: this.show
					})
				} else if(this.hide) {
					this.$store.commit({
						type: 'modalChange',
						modaltarget: "hideModal",
						modalId: this.show
					})
				} else {
					this.$emit('btnClick')
				}
			}
		}
	}
</script>
<style scoped>
	@import "../assets/css/Button.css";
</style>