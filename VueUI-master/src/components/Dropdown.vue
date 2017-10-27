<template>
	<li v-if="ulDrop" class="clearfix" :class="[dropClass, {open:opened, active:actived}]">
		<a class="dropdown-toggle" href="javascript:" @click.stop="busEvent">
			{{text}}
			<span class="caret"></span>
		</a>
		<ul class="dropdown-menu">
			<slot></slot>
		</ul>
	</li>
	<div v-else-if="!split" class="clearfix" :class="[dropClass, {open:opened}]">
		<Btn class="dropdown-toggle" :btn="btn" @click.stop.native="busEvent">
			{{text}}
			<span class="caret"></span>
		</Btn>
		<ul class="dropdown-menu">
			<slot></slot>
		</ul>
	</div>
	<div v-else class="clearfix" :class="[dropClass, {open:opened}]">
		<Btn :btn="btn">{{text}}</Btn>
		<Btn class="dropdown-toggle" text="" :btn="btn" @click.stop.native="busEvent">
			<span class="caret"></span>
		</Btn>
		<ul class="dropdown-menu">
			<slot></slot>
		</ul>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	let date = new Date();
	import bus from "./bus.js"
	import Btn from "./Button.vue"
	export default {
		name: "Dropdown",
		components: {
			Btn: Btn
		},
		props: {
			text: {
				default: "Dropdown"
			},
			drop: {
				default: "dropdown"
			},
			btn: String,
			split: {
				default: false
			},
			actived: {
				default: false
			},
			ulDrop: {
				default: false
			}
		},
		data() {
			return {
				dropClass: this.drop,
				opened: false,
				mark: ""
			}
		},
		methods: {
			busEvent() {
				this.$store.commit({
					type: 'dropOpen',
					mark: this.mark,
					onoff: this.opened
				})
			},
			hideMenu() {
				this.opened = false
			}
		},	
		computed: mapGetters({
			toggle: 'newMark', //toggle是我们定义的计算属性
		}),
		watch: {
			toggle(newmark) {
				if(this.mark != newmark.mark) {
					this.opened = false;
				} else {
					this.opened = !newmark.onoff
				}
			}
		},
		mounted() {
			this.mark = Math.random();
			this.$nextTick(function() {
				let nodeArr = this.$el.querySelectorAll("a");
				for(let i = 0; i < nodeArr.length; i++) {
					nodeArr[i].addEventListener("click", (e) => {
						e.preventDefault();
					});
				}
				document.body.addEventListener("click", () => this.hideMenu());
			})
		}
	}
</script>