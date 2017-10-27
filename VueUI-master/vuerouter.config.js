import index from './src/pages/index.vue'
import test1 from './src/pages/test1.vue'
import test2 from './src/pages/test2.vue'

export default {
	mode: 'history',
	routes: [{
			path: '/',
			name: 'index',
			component: index
		},
		{
			path: '/test1',
			name: 'test1',
			component: test1
		},
		{
			path: '/test2',
			name: 'test2',
			component: test2
		}
	]
}