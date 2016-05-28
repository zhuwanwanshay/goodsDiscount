function $(id){ 
	return document.getElementById(id);
}

//初始化
function initial(){ 
	container = $("container");//获取容器
	buy = $("buy");//获取购买按钮
	pay = $("pay");//获取支付按钮
	receipt = $("receipt");//获取小票
	pay.addEventListener("click",pay_onclick,false);//绑定支付操作
	buy.addEventListener("click",buy_onclick,false);//绑定购买操作
	//初始化商品信息
	var tastyFood = {
		   barcode: 'ITEM000000',
		   name: 'tastyFood',
		   unit: '罐',
		   category: '食品',
		   subCategory: '速食食品',
		   price: 50.00
	}
	var deliciousFood = {
		   barcode: 'ITEM000001',
		   name: 'deliciousFood',
		   unit: '罐',
		   category: '食品',
		   subCategory: '速食食品',
		   price: 65.00
	}
	var appetizingFood = {
		   barcode: 'ITEM000002',
		   name: 'appetizingFood',
		   unit: '罐',
		   category: '食品',
		   subCategory: '速食食品',
		   price: 70.00
	}
	var tomato = {
		   barcode: 'ITEM000003',
		   name: 'tomato',
		   unit: '罐',
		   category: '食品',
		   subCategory: '速食食品',
		   price: 20.00
	}
	var strawberryJam = {
		   barcode: 'ITEM000004',
		   name: 'strawberryJam',
		   unit: '罐',
		   category: '罐头',
		   subCategory: '水果罐头',
		   price: 50.00
	}
	var apricotJam = {
		   barcode: 'ITEM000005',
		   name: 'apricotJam',
		   unit: '罐',
		   category: '罐头',
		   subCategory: '水果罐头',
		   price: 35.00
	}
	var gooseberryJam = {
		   barcode: 'ITEM000006',
		   name: 'gooseberryJam',
		   unit: '罐',
		   category: '罐头',
		   subCategory: '水果罐头',
		   price: 42.00
	}
	var honey = {
		   barcode: 'ITEM000007',
		   name: 'honey',
		   unit: '罐',
		   category: '罐头',
		   subCategory: '蜂蜜罐头',
		   price: 40.00
	}
	var appleJuice = {
		   barcode: 'ITEM000008',
		   name: 'appleJuice',
		   unit: '瓶',
		   category: '果汁',
		   subCategory: '无添加果汁',
		   price: 15.00
	}
	var fruitJuice = {
		   barcode: 'ITEM000009',
		   name: 'fruitJuice',
		   unit: '瓶',
		   category: '果汁',
		   subCategory: '无添加果汁',
		   price: 15.00
	}
	var orangeJuice = {
		   barcode: 'ITEM0000010',
		   name: 'orangeJuice',
		   unit: '瓶',
		   category: '果汁',
		   subCategory: '无添加果汁',
		   price: 15.00
	}
	var pineappleJuice = {
		   barcode: 'ITEM0000011',
		   name: 'pineappleJuice',
		   unit: '瓶',
		   category: '果汁',
		   subCategory: '无添加果汁',
		   price: 15.00
	}
	var greenWine = {
		   barcode: 'ITEM0000012',
		   name: 'greenWine',
		   unit: '桶',
		   category: '酒类',
		   subCategory: '葡萄酒',
		   price: 100.00
	}
	var milk = {
		   barcode: 'ITEM0000013',
		   name: 'milk',
		   unit: '盒',
		   category: '牛奶',
		   subCategory: '纯牛奶',
		   price: 49.00
	}
	var yogurt = {
		   barcode: 'ITEM0000014',
		   name: 'yogurt',
		   unit: '盒',
		   category: '牛奶',
		   subCategory: '酸牛奶',
		   price: 49.00
	}
	var coffee = {
		   barcode: 'ITEM0000017',
		   name: 'coffee',
		   unit: '罐',
		   category: '咖啡',
		   subCategory: '黑咖啡',
		   price: 67.00
	}

	//初始化物品的添加删除操作
	tomato = container.getElementsByClassName("tomato")[0];
	toQuantity = tomato.getElementsByTagName("span")[0];
	addTomato = tomato.getElementsByClassName("add")[0];
	addTomato.addEventListener("click",add_tomato,false);//绑定添加操作
	subTomato = tomato.getElementsByClassName("sub")[0];
	subTomato.addEventListener("click",sub_tomato,false);//绑定删除操作

	strawberryJam = container.getElementsByClassName("strawberryJam")[0];
	strQuantity = strawberryJam.getElementsByTagName("span")[0];
	addstrawberryJam = strawberryJam.getElementsByClassName("add")[0];
	addstrawberryJam.addEventListener("click",add_strawberryJam,false);//绑定添加操作
	substrawberryJam = strawberryJam.getElementsByClassName("sub")[0];
	substrawberryJam.addEventListener("click",sub_strawberryJam,false);//绑定删除操作

	apricotJam = container.getElementsByClassName("apricotJam")[0];
	aprQuantity = apricotJam.getElementsByTagName("span")[0];
	addapricotJam = apricotJam.getElementsByClassName("add")[0];
	addapricotJam.addEventListener("click",add_apricotJam,false);//绑定添加操作
	subapricotJam = apricotJam.getElementsByClassName("sub")[0];
	subapricotJam.addEventListener("click",sub_apricotJam,false);//绑定删除操作

	gooseberryJam = container.getElementsByClassName("gooseberryJam")[0];
	gooQuantity = gooseberryJam.getElementsByTagName("span")[0];
	addgooseberryJam = gooseberryJam.getElementsByClassName("add")[0];
	addgooseberryJam.addEventListener("click",add_gooseberryJam,false);//绑定添加操作
	subgooseberryJam = gooseberryJam.getElementsByClassName("sub")[0];
	subgooseberryJam.addEventListener("click",sub_gooseberryJam,false);//绑定删除操作

	honey = container.getElementsByClassName("honey")[0];
	honQuantity = honey.getElementsByTagName("span")[0];
	addhoney = honey.getElementsByClassName("add")[0];
	addhoney.addEventListener("click",add_honey,false);//绑定添加操作
	subhoney = honey.getElementsByClassName("sub")[0];
	subhoney.addEventListener("click",sub_honey,false);//绑定删除操作

	appleJuice = container.getElementsByClassName("appleJuice")[0];
	appQuantity = appleJuice.getElementsByTagName("span")[0];
	addappleJuice = appleJuice.getElementsByClassName("add")[0];
	addappleJuice.addEventListener("click",add_appleJuice,false);//绑定添加操作
	subappleJuice = appleJuice.getElementsByClassName("sub")[0];
	subappleJuice.addEventListener("click",sub_appleJuice,false);//绑定删除操作

	fruitJuice = container.getElementsByClassName("fruitJuice")[0];
	fruQuantity = fruitJuice.getElementsByTagName("span")[0];
	addfruitJuice = fruitJuice.getElementsByClassName("add")[0];
	addfruitJuice.addEventListener("click",add_fruitJuice,false);//绑定添加操作
	subfruitJuice = fruitJuice.getElementsByClassName("sub")[0];
	subfruitJuice.addEventListener("click",sub_fruitJuice,false);//绑定删除操作

	orangeJuice = container.getElementsByClassName("orangeJuice")[0];
	orQuantity = orangeJuice.getElementsByTagName("span")[0];
	addorangeJuice = orangeJuice.getElementsByClassName("add")[0];
	addorangeJuice.addEventListener("click",add_orangeJuice,false);//绑定添加操作
	suborangeJuice = orangeJuice.getElementsByClassName("sub")[0];
	suborangeJuice.addEventListener("click",sub_orangeJuice,false);//绑定删除操作
	
	pineappleJuice = container.getElementsByClassName("pineappleJuice")[0];
	pinQuantity = pineappleJuice.getElementsByTagName("span")[0];
	addpineappleJuice = pineappleJuice.getElementsByClassName("add")[0];
	addpineappleJuice.addEventListener("click",add_pineappleJuice,false);//绑定添加操作
	subpineappleJuice = pineappleJuice.getElementsByClassName("sub")[0];
	subpineappleJuice.addEventListener("click",sub_pineappleJuice,false);//绑定删除操作

	greenWine = container.getElementsByClassName("greenWine")[0];
	grQuantity = greenWine.getElementsByTagName("span")[0];
	addgreenWine = greenWine.getElementsByClassName("add")[0];
	addgreenWine.addEventListener("click",add_greenWine,false);//绑定添加操作
	subgreenWine = greenWine.getElementsByClassName("sub")[0];
	subgreenWine.addEventListener("click",sub_greenWine,false);//绑定删除操作

	milk = container.getElementsByClassName("milk")[0];
	milkQuantity = milk.getElementsByTagName("span")[0];
	addmilk = milk.getElementsByClassName("add")[0];
	addmilk.addEventListener("click",add_milk,false);//绑定添加操作
	submilk = milk.getElementsByClassName("sub")[0];
	submilk.addEventListener("click",sub_milk,false);//绑定删除操作

	yogurt = container.getElementsByClassName("yogurt")[0];
	yogurtQuantity = yogurt.getElementsByTagName("span")[0];
	addyogurt = yogurt.getElementsByClassName("add")[0];
	addyogurt.addEventListener("click",add_yogurt,false);//绑定添加操作
	subyogurt = yogurt.getElementsByClassName("sub")[0];
	subyogurt.addEventListener("click",sub_yogurt,false);//绑定删除操作

	coffee = container.getElementsByClassName("coffee")[0];
	coffeeQuantity = coffee.getElementsByTagName("span")[0];
	addcoffee = coffee.getElementsByClassName("add")[0];
	addcoffee.addEventListener("click",add_coffee,false);//绑定添加操作
	subcoffee = coffee.getElementsByClassName("sub")[0];
	subcoffee.addEventListener("click",sub_coffee,false);//绑定删除操作

}
function pay_onclick(){ 
	receipt.style.display = "block";
		var recJson = [];
	for( var i = 0; i < 13; i++){ 
		span = container.getElementsByTagName("span")[i].innerHTML;
		while(span > 0){ 
			if(span ==1){
				barcode = "ITEM00000"+i;
			}else{ 
				barcode = "ITEM00000"+i+"-"+span;
			}
			recJson.push(barcode);
			break;
		}	
	}
				console.log(recJson);
}
function buy_onclick(){ 
	receipt.style.display = "none";
	for( var i = 0; i < 13; i++){ 
		container.getElementsByTagName("span")[i].innerHTML = 0;
	}	
}

function add_tomato(){ 	
	toQuantity.innerHTML = parseInt(toQuantity.innerHTML)+1;
}
function sub_tomato(){ 
	while(toQuantity.innerHTML > 0){
		toQuantity.innerHTML = parseInt(toQuantity.innerHTML)-1;
		break;
    }
}

function add_strawberryJam(){ 	
	strQuantity.innerHTML = parseInt(strQuantity.innerHTML)+1;
}
function sub_strawberryJam(){ 
	while(strQuantity.innerHTML > 0){
		strQuantity.innerHTML = parseInt(strQuantity.innerHTML)-1;
		break;
    }
}

function add_apricotJam(){ 	
	aprQuantity.innerHTML = parseInt(aprQuantity.innerHTML)+1;
}
function sub_apricotJam(){ 
	while(aprQuantity.innerHTML > 0){
		aprQuantity.innerHTML = parseInt(aprQuantity.innerHTML)-1;
		break;
    }
}

function add_gooseberryJam(){ 	
	gooQuantity.innerHTML = parseInt(gooQuantity.innerHTML)+1;
}
function sub_gooseberryJam(){ 
	while(gooQuantity.innerHTML > 0){
		gooQuantity.innerHTML = parseInt(gooQuantity.innerHTML)-1;
		break;
    }
}

function add_honey(){ 	
	honQuantity.innerHTML = parseInt(honQuantity.innerHTML)+1;
}
function sub_honey(){ 
	while(honQuantity.innerHTML > 0){
		honQuantity.innerHTML = parseInt(honQuantity.innerHTML)-1;
		break;
    }
}

function add_appleJuice(){ 	
	appQuantity.innerHTML = parseInt(appQuantity.innerHTML)+1;
}
function sub_appleJuice(){ 
	while(appQuantity.innerHTML > 0){
		appQuantity.innerHTML = parseInt(appQuantity.innerHTML)-1;
		break;
    }
}

function add_fruitJuice(){ 	
	fruQuantity.innerHTML = parseInt(fruQuantity.innerHTML)+1;
}
function sub_fruitJuice(){ 
	while(fruQuantity.innerHTML > 0){
		fruQuantity.innerHTML = parseInt(fruQuantity.innerHTML)-1;
		break;
    }
}

function add_orangeJuice(){ 	
	orQuantity.innerHTML = parseInt(orQuantity.innerHTML)+1;
}
function sub_orangeJuice(){ 
	while(orQuantity.innerHTML > 0){
		orQuantity.innerHTML = parseInt(orQuantity.innerHTML)-1;
		break;
    }
}

function add_pineappleJuice(){ 	
	pinQuantity.innerHTML = parseInt(pinQuantity.innerHTML)+1;
}
function sub_pineappleJuice(){ 
	while(pinQuantity.innerHTML > 0){
		pinQuantity.innerHTML = parseInt(pinQuantity.innerHTML)-1;
		break;
    }
}

function add_greenWine(){ 	
	grQuantity.innerHTML = parseInt(grQuantity.innerHTML)+1;
}
function sub_greenWine(){ 
	while(grQuantity.innerHTML > 0){
		grQuantity.innerHTML = parseInt(grQuantity.innerHTML)-1;
		break;
    }
}

function add_milk(){ 	
	milkQuantity.innerHTML = parseInt(milkQuantity.innerHTML)+1;
}
function sub_milk(){ 
	while(milkQuantity.innerHTML > 0){
		milkQuantity.innerHTML = parseInt(milkQuantity.innerHTML)-1;
		break;
    }
}

function add_yogurt(){ 	
	yogurtQuantity.innerHTML = parseInt(yogurtQuantity.innerHTML)+1;
}
function sub_yogurt(){ 
	while(yogurtQuantity.innerHTML > 0){
		yogurtQuantity.innerHTML = parseInt(yogurtQuantity.innerHTML)-1;
		break;
    }
}

function add_coffee(){ 	
	coffeeQuantity.innerHTML = parseInt(coffeeQuantity.innerHTML)+1;
}
function sub_coffee(){ 
	while(coffeeQuantity.innerHTML > 0){
		coffeeQuantity.innerHTML = parseInt(coffeeQuantity.innerHTML)-1;
		break;
    }
}
//绑定操作
window.addEventListener("load",initial,false);