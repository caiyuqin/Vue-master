<template>
	<div v-if="show" class="panel-group">
		<div class="panel panel-default" v-for="(item,index) in list">
			<div class="panel-heading">
				<h4 class="panel-title">
			        <a @click="shtoggle(index)">{{item}}</a>
			    </h4>
			</div>
			<div class="panel-collapse collapse" :class="{in:index===isActive}">
				<div class="panel-body">
					{{item}}
				</div>
			</div>
		</div>
	</div>
	<div v-else class="panel-group">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h4 class="panel-title">
          <a @click="isToggle=!isToggle">Collapsible list group</a>
        </h4>
			</div>
			<div class="panel-collapse collapse" :class="{in:isToggle}">
				<ul class="list-group">
					<li class="list-group-item">Bootply</li>
					<li class="list-group-item">One itmus ac facilin</li>
					<li class="list-group-item">Second eros</li>
				</ul>
				<div class="panel-footer">Footer</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			show: {
				default: false
			}
		},
		data() {
			return {
				isActive: -1,
				isToggle: false,			
				list: ["Collapsible Group Item #1", "Collapsible Group Item #2", "Collapsible Group Item #3"]
			}
		},
		methods: {
			shtoggle(index) {
				let panelColl = this.$el.querySelectorAll(".collapse");
				let classes = panelColl[index].classList;
				if(classes[classes.length - 1] !== "in") {
					this.isActive = index;
				} else {
					this.isActive = -1;

				}
			}
		}
	}
</script>