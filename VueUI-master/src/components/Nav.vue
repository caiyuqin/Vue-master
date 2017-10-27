<template>
	<ul class="nav" :class="classObj">
		<slot></slot>
		<Drop v-if="hasDrop" :ulDrop="hasDrop" :actived="actived">
			<slot name="drop"></slot>
		</Drop>
	</ul>
</template>
<script>
	import Drop from "./Dropdown"
	export default {
		components: {
			Drop: Drop
		},
		props: {
			navi: {
				default: "nav-tabs"
			},
			hasDrop: {
				default: false
			}
		},
		data() {
			return {
				classObj: this.navi,
				actived: false
			}
		},
		methods: {
			activate(item) {
				if(item.parentNode.className == "active") {
					return
				}
				let id = item.getAttribute("href");
				let lis = this.$el.querySelectorAll("li");
				for(let i = 0; i < lis.length; i++) {	
					let classes = lis[i].classList;
					let newClass = "";
					for(let j = 0; j < classes.length; j++) {
						if(classes[j] != "active") {
							newClass += classes[j] + " ";
						}
					}
					lis[i].className = newClass;
				}
				this.actived = false;     
				item.parentNode.className = "active";
				let itemPar = item.parentNode.parentNode;
				if(itemPar.className == "dropdown-menu") {
					this.actived = true;
				}
				if(id && id != "#") {
					let sibs = document.querySelector(id).parentNode.children;
					for(let i = 0; i < sibs.length; i++) {
						if(sibs[i].id == id) {
							sibs[i].className = sibs[i].className + " active"
						} else {
							sibs[i].className = sibs[i].className.replace("active", "")
						}
					}
				}
			}
		},
		mounted() {
			this.$nextTick(function() {
				let nodeArr = this.$el.querySelectorAll("a");
				for(let i = 0; i < nodeArr.length; i++) {
					if(nodeArr[i].className != "dropdown-toggle") {
						nodeArr[i].addEventListener("click", (e) => {
							e.preventDefault();
							this.activate(nodeArr[i]);
						});
					}
				}
			});			
		}
	}
</script>