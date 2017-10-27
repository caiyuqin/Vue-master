<template>
	<ul class="pagination" :class="{'pagination-lg':pagelg,'pagination-sm':pagesm}">
		<li>
			<a href="javascript:;" aria-label="Previous">
				<span aria-hidden="true">&laquo;</span>
			</a>
		</li>
		<li v-if="show" v-for="(item,index) in list" :class="{active:index==isActive}" @click="toggle(index)">
			<a href="javascript:;">{{item}}</a>
		</li>
		<slot>

		</slot>
		<li>
			<a href="javascript:;" aria-label="Next">
				<span aria-hidden="true">&raquo;</span>
			</a>
		</li>
	</ul>
</template>
<script>
	export default {
		props: {
			show: {
				default: false
			},
			pagelg: {
				default: false
			},
			pagesm: {
				default: false
			}
		},
		data() {
			return {
				isActive: 0,
				list: [1, 2, 3, 4, 5]

			}
		},
		methods: {
			toggle(index) {
				this.isActive = index;
			}
		}
	}
</script>