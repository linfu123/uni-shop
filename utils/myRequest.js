const BASE_URL = 'http://localhost:8001/'

const myRequest = (option)=> {
	
	return new Premise((resolve,reject)	=>{
		uni.request({
			url:BASE_URL+option.url,
			method:option.method || 'GET',
			data:option.data || '',
		    dataType: 'json', 
			success: (res) => {
				resolve(res)
			},
			fail:(err) => {
				reject(err)
			}
		})
	});
	
}
	