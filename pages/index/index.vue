<template>
	<view>
		首页
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad() {
			this.getSwipers();
		},
		methods: {
			async getSwipers () {
				const res = await this.$requestUtil({
					url: '/images/getall'
				})
				console.log(res.data)
			},
		}
	}
</script>

<style>
	
</style>
