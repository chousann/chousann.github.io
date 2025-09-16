;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: https://www.bootstrapmb.com/item/15674(这个备注仅在演示页面有，源代码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){top.location.href='https%3a%2f%2fwww.bootstrapmb.com%2fitem%2f15674'}};// counter
const counter = document.querySelectorAll('.counter-value');
const speed = 2500; // The lower the slower

counter.forEach(counter_value => {
	const updateCount = () => {
		const target = +counter_value.getAttribute('data-target');
		const count = +counter_value.innerText;

		// Lower inc to slow and higher to slow
        var inc = target / speed;

        if(inc < 1){
            inc = 1;
        }
        
		// Check if target is reached
		if (count < target) {
            // Add inc to count and output in counter_value
			counter_value.innerText = (count + inc).toFixed(0);
			// Call function every ms
			setTimeout(updateCount, 1);
		} else {
			counter_value.innerText = target;
		}
	};

	updateCount();
});;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: https://www.bootstrapmb.com/item/15674(这个备注仅在演示页面有，源代码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){top.location.href='https%3a%2f%2fwww.bootstrapmb.com%2fitem%2f15674'}};