<template>
	<div class="modal fade" :class="{in:actived}" tabindex="-1" @click="modalClick">
		<div class="modal-dialog">
			<div class="modal-content">
				<div class="modal-header">
					<Btn v-if="closeBtn" type="button" class="close" @click.native="hide">x</Btn>
					<h4 class="modal-title">{{text}}</h4>
				</div>
				<div class="modal-body">
					<slot name="body"></slot>
				</div>
				<div class="modal-footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Btn from "./Button"
	import { mapGetters } from 'vuex'
	export default {
		components: {
			Btn: Btn
		},
		props: {
			text: String,
			closeBtn: {
				default: true
			}
		},
		data() {
			return {
				target: "",
				showtarget: "",
				actived: false,
				inAnimate: false,
				originalBodyPad: 0,
				hideAndShow: false
			}
		},
		methods: {
			check(target) {
				let flag = 0;
				if(target.substring(0, 1) == ".") {
					for(let i = 0; i < this.$el.classList.length; i++) {
						if(this.$el.classList[i] == target) {
							flag = 1;
						}
					}
				} else if(target.substring(0, 1) == "#" && "#" + this.$el.id == target) {
					flag = 1;
				}
				if(this.actived || !target) {
					flag = 0;
				}
				if(!flag) {
					return
				}
				this.show();
			},
			show() {
				this.setScrollbar();
				let bodyClass = document.body.getAttribute("class");
				bodyClass = bodyClass ? bodyClass + " " : "";
				document.body.setAttribute("class", bodyClass + "modal-open");
				let bgDiv = document.createElement('div');
				bgDiv.className = "modal-backdrop fade in";
				document.body.appendChild(bgDiv);
				let targetNode = document.querySelector(this.target);
				targetNode.style.display = "block";
				targetNode.scrollTop = 0;
				this.actived = true;
			},
			hide() {
				if(!this.actived) {
					return
				}
				this.actived = false;
				this.inAnimate = true;
				// 动画完成后再执行函数，若一开始就执行，则没有退出动画，
				// 貌似现在统一用transitionend了，没有webkitTransitionEnd之类的，加了反而会导致监听不到
				this.$el.addEventListener("transitionend", this.none);
			},
			// display置为none，删掉背景元素
			none() {
				let targetNode = document.querySelector(this.target);
				targetNode.style.display = "none";
				let bgDiv = document.getElementsByClassName("modal-backdrop")[0];
				bgDiv.parentNode.removeChild(bgDiv);
				document.body.className = document.body.className.replace("modal-open", "");
				document.body.style.paddingRight = this.originalBodyPad;
				this.$el.removeEventListener("transitionend", this.none);
				this.inAnimate = false;
				this.$store.commit({
					type: 'modalChange',
					modaltarget: this.hideAndShow ? "showModal" : "",
					modalId: this.showtarget
				});
			},
			setScrollbar() {
				let scrollbarWidth = this.measureScrollbar();
				let bodyPad = parseInt((window.getComputedStyle(document.body).paddingRight.replace("px", "") || 0), 10);
				this.originalBodyPad = document.body.style.paddingRight;
				// this.originalBodyPad = document.body.style.paddingRight || '';
				if(document.body.clientWidth < window.innerWidth) {
					document.body.style.paddingRight = parseInt(bodyPad + scrollbarWidth) + "px";
				}
			},
			measureScrollbar() {
				let scrollDiv = document.createElement('div');
				scrollDiv.className = 'modal-scrollbar-measure';
				document.body.appendChild(scrollDiv);
				let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
				document.body.removeChild(scrollDiv);
				return scrollbarWidth
			},
			modalClick(e) {
				if(e.target !== e.currentTarget) return
				this.hide();
			}
		},
		/*computed: {
			statechange() {
				return this.$store.getters.newTarget
			}
		},*/
		computed: mapGetters({
			products: 'newTarget' //products是我们定义的计算属性
		}),

		watch: {
			products(val) {
				if(val === "hideModal") {
					this.hide();
				} else if(val === "showModal") {
					this.target = this.$store.getters.newId;
					this.hideAndShow = false;
					this.check(this.target);
				} else if(val === "hideAndShow") {
					this.showtarget = this.$store.getters.newId;
					this.hideAndShow = true;
					this.hide();
				}
			}
		}
	}
</script>