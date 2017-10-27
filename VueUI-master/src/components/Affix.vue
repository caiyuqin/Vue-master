<template>
	<div class="hidden-print hidden-xs hidden-sm">
		<nav class="bs-docs-sidebar" :class="{affix:affixed}">
			<ul class="nav bs-docs-sidenav">
				<slot></slot>
			</ul>
		</nav>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				affixed: false,
				activeTarget: null
			}
		},
		methods: {
			checkAffix() {
				if(!(this.$el.offsetWidth || this.$el.offsetHeight || this.$el.getClientRects().length)) {
					return
				}
				const rect = this.$el.getBoundingClientRect();
				/*let scroll = {};
				let element = {};
				const rect = this.$el.getBoundingClientRect();
				const body = document.body;
				let ret = window['pageYOffset'];
				if (typeof ret !== 'number') {
				  // ie6,7,8 standard mode
				  ret = document.documentElement["scrollTop"];
				  if (typeof ret !== 'number') {
				    // quirks mode
				    ret = document.body["scrollTop"];
				  }
				}
				scroll.top = ret;
				element.top = scroll.top + rect["top"] - (this.$el['clientTop'] || body['clientTop'] || 0);
				let fix = ret > element.top;*/
				let fix = rect.top <= 0;
				if(this.affixed !== fix) {
					this.affixed = fix;
				}
			},
			checkActive() {
				let offsetArr = [];
				let targetArr = [];
				let ret = window['pageYOffset'];
				if(typeof ret !== 'number') {
					// ie6,7,8 standard mode
					ret = document.documentElement["scrollTop"];
					if(typeof ret !== 'number') {
						// quirks mode
						ret = document.body["scrollTop"];
					}
				}
				for(let i = 0; i < this.$el.getElementsByTagName("a").length; i++) {
					let id = this.$el.getElementsByTagName("a")[i].getAttribute("href").substring(1);
					const rect = document.getElementById(id).getBoundingClientRect();
					offsetArr.push(rect.top);
					targetArr.push(id);
				}
				for(let i = offsetArr.length - 1; i >= 0; i--) {
					this.activeTarget != targetArr[i] && offsetArr[i] <= 0 && (offsetArr[i + 1] === undefined || offsetArr[i + 1] > 0) &&
						this.activeItem(targetArr[i])
				}
			},
			activeItem(id) {
				this.activeTarget = id;
				for(let i = 0; i < this.$el.getElementsByTagName("a").length; i++) {
					let item = this.$el.getElementsByTagName("a")[i];
					item.getAttribute("href") == "#" + id ? item.parentNode.setAttribute("class", "active") : (item.parentNode.setAttribute("class", ""), item.blur());
				}
			},
			clickEvent(e, item) {
				e.preventDefault();
				let lis = this.$el.querySelectorAll("li");
				for(let i = 0; i < lis.length; i++) {
					lis[i].className = "";
				}
				item.className = "active";
				let id = item.children[0].getAttribute("href").substring(1);
				const rect = document.getElementById(id).getBoundingClientRect();
				document.body.scrollTop = document.body.scrollTop + rect.top;
			}
		},
		mounted() {
			this.$nextTick(function() {
				window.addEventListener("scroll", () => {
					this.checkAffix();
					this.checkActive();
				});
				let nodeArr = this.$el.querySelectorAll("li");
				for(let i = 0; i < nodeArr.length; i++) {
					nodeArr[i].addEventListener("click", (e) => this.clickEvent(e, nodeArr[i]));
				}
			});
		},
		beforeDestroy() {
			window.removeEventListener("scroll", () => {
				this.checkAffix();
				this.checkActive();
			})
		}
	}
</script>