(this.webpackJsonpfirstapp=this.webpackJsonpfirstapp||[]).push([[0],{31:function(e,a,t){},36:function(e,a,t){e.exports=t(72)},41:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},68:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(33),r=t.n(c),s=t(6),o=t(1),m=t(2),i=t(3),u=t(5),d=t(4),p=(t(41),function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).renderCity=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e.city},e.name," | ",e.city_name)}))},e.renderRestaurant=function(e){if(e)return e.map((function(e){return l.a.createElement("option",{value:e._id},e.name," | ",e.locality)}))},e.handleCity=function(a){var t=a.target.value,n="".concat("https://edumatorestapi.herokuapp.com/restaurant?city=").concat(t);fetch(n,{Method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({restaurant:a})}))},e.handleRest=function(a){e.props.history.push("/details/".concat(a.target.value))},e.state={location:"",restaurant:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"imageContainer img-responsive"},l.a.createElement("div",{className:"logo_container logo"},"e!"),l.a.createElement("div",{className:"heading"},"Find the best restaurants, cafes & bars!"),l.a.createElement("div",{className:"locationSelector"},l.a.createElement("select",{className:"locationDropDown",onChange:this.handleCity},l.a.createElement("option",null,"------Select City------"),this.renderCity(this.state.location)),"\xa0\xa0\xa0",l.a.createElement("select",{className:"restnames",onChange:this.handleRest},l.a.createElement("option",null,"-------Select Restaurant-------"),this.renderRestaurant(this.state.restaurant))))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumatorestapi.herokuapp.com/location",{Method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({location:a})}))}}]),t}(n.Component)),h=Object(o.e)(p),E=(t(47),function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"quickSearchContainer"},l.a.createElement("p",{className:"quickSearchHeading"},"Quick Search"),l.a.createElement("p",{className:"quickSearchSubHeading"},"Discover Restaurants by type of Meal"),function(e){var a=e.quickData;if(a)return a.map((function(e){return l.a.createElement(s.b,{to:"/list/".concat(e.mealtype),key:e._id},l.a.createElement("div",{className:"col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12"},l.a.createElement("div",{className:"tileContainer"},l.a.createElement("div",{className:"tileComponent1"},l.a.createElement("img",{src:"/images/".concat(e.name,".png"),className:"imageclass",alt:"Breakfast"})),l.a.createElement("div",{className:"tileComponent2"},l.a.createElement("div",{className:"componentHeading"},e.name),l.a.createElement("div",{className:"componentInfo"},"Check out out ",e.name," menu for the most delicious dishes!")))))}))}(e))))}),v=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={mealType:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(E,{quickData:this.state.mealType})}},{key:"componentDidMount",value:function(){var e=this;fetch("https://edumatorestapi.herokuapp.com/mealtype",{method:"GET"}).then((function(e){return e.json()})).then((function(a){e.setState({mealType:a})}))}}]),t}(n.Component),f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(h,null),l.a.createElement(v,null)))},N=(t(48),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-inverse"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"navbar-header"},l.a.createElement("button",{type:"button",className:"navbar-toggle","data-toggle":"collapse","data-target":"#myNavbar"},l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"}),l.a.createElement("span",{className:"icon-bar"})),l.a.createElement(s.b,{className:"navbar-brand",to:"#"},"Edumato")),l.a.createElement("div",{className:"collapse navbar-collapse",id:"myNavbar"},l.a.createElement("ul",{className:"nav navbar-nav"},l.a.createElement("li",null,l.a.createElement(s.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(s.b,{to:"/viewBooking"},"Orders")))))))}),g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,l.a.createElement("h3",null,"\xa9Edumato")))},b=t(8),y=t.n(b),O=(t(31),t(35)),k=t.n(O),C=function(e,a){if(a){var t=e.limit,n=e.activePage;return(a=a.slice((n-1)*t,(n-1)*t+t)).map((function(e){return l.a.createElement("div",{className:"item",key:e._id},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6 col-sm-11 col-xs-11"},l.a.createElement("img",{className:"image",src:e.thumb})),l.a.createElement("div",{className:"col-md-6 col-sm-11 col-xs-11"},l.a.createElement("div",{className:"hotel_name heads"},l.a.createElement(s.b,{to:"/details/".concat(e._id),className:"heads"},e.name)),l.a.createElement("div",{className:"hotel_name bottoms"},e.city_name),l.a.createElement("div",{className:"hotel_name bottoms"},e.locality),l.a.createElement("div",{className:"hotel_name bottoms"},e.address),l.a.createElement("div",null,l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-cutlery","aria-hidden":"true"}),l.a.createElement("i",{className:"fa fa-glass","aria-hidden":"true"}))))),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-sm-3 col-xs-6 "},l.a.createElement("div",{className:"cuisine_block"},"Cuisine"),l.a.createElement("div",{className:"cuisine_block"},"Cost Per Two.")),l.a.createElement("div",{className:"col-sm-9 col-xs-6"},l.a.createElement("div",{className:"cuisine_out"},e.Cuisine[0].name," | ",e.Cuisine[1].name),l.a.createElement("div",{className:"cuisine_out"},"Rs. ",e.cost))),l.a.createElement("hr",null))}))}return l.a.createElement("center",null,l.a.createElement("h5",null,"There is no perfect diet which suits eveyone"),l.a.createElement("img",{src:"/images/foodloader.gif"}))},j=function(e){return console.log(e),l.a.createElement("div",null,l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},C(e,e.listdata)),l.a.createElement("center",null,l.a.createElement(k.a,{activePage:e.activePage,itemsCountPerPage:e.limit,totalItemsCount:e.totalNoOfItems,pageRangeDisplayed:5,onChange:function(a){!function(e,a){e.pageNumber(a);var t=e.listData;C(e,t)}(e,a)},itemClass:"page-item",linkClass:"page-link"}))))},S=(t(68),function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("h3",{className:"head-top"},"Pocket Friendly Suggestions For You"),l.a.createElement("div",{className:"row"},function(e){var a=e.sudata;if(a)return a.map((function(e){return l.a.createElement("div",{className:"card col-md-2"},l.a.createElement("h3",null,l.a.createElement(s.b,{to:"/details/".concat(e._id)},e.name)),l.a.createElement("img",{className:"card-img-top",src:e.thumb}),l.a.createElement("div",{className:"card-body"},l.a.createElement("h4",{className:"card-title"},e.locality),l.a.createElement("p",{className:"card-text"},l.a.createElement("p",null,"Cost: ",e.cost))))}))}(e)),l.a.createElement("hr",null))}),w="https://edumatorestapi.herokuapp.com/restaurantlist",P=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={recommendations:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(S,{sudata:this.state.recommendations}))}},{key:"componentDidMount",value:function(){var e,a=this,t=(new Date).getDate(),n=sessionStorage.getItem("mealid");t>0&&t<11?e="".concat(w,"/").concat(n,"?hcost=500&lcost=1000"):t>10&&t<21?e="".concat(w,"/").concat(n,"?hcost=300&lcost=800"):t>20&&t<32&&(e="".concat(w,"/").concat(n,"?hcost=100&lcost=500")),y.a.get(e).then((function(e){a.setState({recommendations:e.data})}))}}]),t}(n.Component),_="https://edumatorestapi.herokuapp.com/restaurantlist",F=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).costfilter=function(a){var t,n=a.target.value.split(","),l=Number(n[0]),c=Number(n[1]),r=sessionStorage.getItem("mealid");t=""==n?"".concat(_,"/").concat(r):"".concat(_,"/").concat(r,"?hcost=").concat(l,"&lcost=").concat(c),y.a.get(t).then((function(a){e.props.costdata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Cost Filter"),l.a.createElement("div",{onChange:this.costfilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cost"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"100,300",name:"cost"}),"100-300"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"301,500",name:"cost"}),"301-500"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"501,800",name:"cost"}),"501-800")))}}]),t}(n.Component),D="https://edumatorestapi.herokuapp.com/restaurantlist",x=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).cuisinefilter=function(a){var t,n=a.target.value,l=sessionStorage.getItem("mealid");t=""==n?"".concat(D,"/").concat(l):"".concat(D,"/").concat(l,"?cuisine=").concat(n),y.a.get(t).then((function(a){e.props.cuisinedata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Cusine Filter"),l.a.createElement("div",{onChange:this.cuisinefilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"",name:"cuisine"}),"All"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"cuisine"}),"North Indian"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"2",name:"cuisine"}),"South Indian"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"3",name:"cuisine"}),"Chinese"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"4",name:"cuisine"}),"Fast Food"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"5",name:"cuisine"}),"Street Food")))}}]),t}(n.Component),I="https://edumatorestapi.herokuapp.com/restaurantlist",T=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=a.call.apply(a,[this].concat(l))).sortfilter=function(a){var t=a.target.value,n=sessionStorage.getItem("mealid");I="".concat(I,"/").concat(n,"?sort=").concat(t),y.a.get(I).then((function(a){e.props.sortdata(a.data)}))},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("center",null,"Sort Filter"),l.a.createElement("div",{onChange:this.sortfilter},l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"1",name:"cuisine"}),"Low to High"),l.a.createElement("label",{className:"radio"},l.a.createElement("input",{type:"radio",value:"-1",name:"cuisine"}),"High to Low")))}}]),t}(n.Component),M=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(e){var n;return Object(m.a)(this,t),(n=a.call(this)).state={hotellist:"",mealname:"",activePage:1,totalNoOfItems:1},n}return Object(i.a)(t,[{key:"setDataAsPerFilter",value:function(e){this.setState({hotellist:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-2"},l.a.createElement(F,{costdata:function(a){e.setDataAsPerFilter(a)}}),l.a.createElement(x,{cuisinedata:function(a){e.setDataAsPerFilter(a)}}),l.a.createElement(T,{sortdata:function(a){e.setDataAsPerFilter(a)}})),l.a.createElement("div",{className:"col-md-10"},l.a.createElement(P,null),l.a.createElement("center",null,l.a.createElement("h3",{className:"head-display"},"OPTIONS FOR  ",this.state.mealname)),l.a.createElement(j,{listdata:this.state.hotellist,activePage:this.state.activePage,limit:3,totalNoOfItems:this.state.totalNoOfItems,pageNumber:function(a){e.setState({activePage:a})}}))))}},{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;sessionStorage.setItem("mealid",a),y.a.get("".concat("https://edumatorestapi.herokuapp.com/mealtype")).then((function(t){for(var n=0;n<t.data.length;n++)t.data[n]._id===Number(a)?(e.setState({mealname:t.data[n].name.toUpperCase()}),n=t.data.length):e.setState({mealname:"Wrong Input"})})),fetch("".concat("https://edumatorestapi.herokuapp.com/restaurant?mealtype=").concat(a)).then((function(e){return e.json()})).then((function(a){e.setState({hotellist:a.slice(0,a.length-1),totalNoOfItems:a.length-1})}))}}]),t}(n.Component),A=t(14),R=t.n(A),B=t(17),z=t(16),H=(t(70),t(71),function(e){return l.a.createElement(l.a.Fragment,null,function(e){var a=e.restData;return a?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-primary"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h3",{className:"titles"},a.name)),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-12"},l.a.createElement("button",{type:"button","data-toggle":"modal","data-target":"#myModal"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1500,height:400}})),l.a.createElement("div",{id:"myModal",class:"modal fade",role:"dialog"},l.a.createElement("div",{className:"modal-dialog"},l.a.createElement("div",{className:"modal-content"},l.a.createElement("div",{className:"modal-header"},l.a.createElement("button",{type:"button",className:"close","data-dismiss":"modal"},"\xd7"),l.a.createElement("h4",{className:"modal-title"},a.name)),l.a.createElement("div",{className:"modal-body"},l.a.createElement("div",{id:"myCarousel",className:"carousel slide","data-ride":"carousel"},l.a.createElement("ol",{className:"carousel-indicators"},l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"0",className:"active"}),l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"1"}),l.a.createElement("li",{"data-target":"#myCarousel","data-slide-to":"2"})),l.a.createElement("div",{className:"carousel-inner"},l.a.createElement("div",{className:"item active"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1500,height:400}}),l.a.createElement("div",{className:"carousel-caption"})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1500,height:400}}),l.a.createElement("div",{className:"carousel-caption"})),l.a.createElement("div",{className:"item"},l.a.createElement("img",{className:"img-responsive",src:a.thumb,style:{width:1500,height:400}}),l.a.createElement("div",{className:"carousel-caption"}))),l.a.createElement("a",{className:"left carousel-control",href:"#myCarousel","data-slide":"prev"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-left"}),l.a.createElement("span",{className:"sr-only"},"Previous")),l.a.createElement("a",{className:"right carousel-control",href:"#myCarousel","data-slide":"next"},l.a.createElement("span",{className:"glyphicon glyphicon-chevron-right"}),l.a.createElement("span",{className:"sr-only"},"Next")))))))),l.a.createElement("div",{className:"col-md-12"},l.a.createElement("h3",{className:"titles"},a.name),l.a.createElement("h3",{className:"subTitle"},a.locality),l.a.createElement("h3",{className:"subTitle"},a.address))),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement(z.d,null,l.a.createElement(z.b,null,l.a.createElement(z.a,{style:{fontSize:22,fontFamily:"Piazzolla"}},"About"),l.a.createElement(z.a,{style:{fontSize:22,fontFamily:"Piazzolla"}},"Contact")),l.a.createElement(z.c,null,l.a.createElement("p",null,a.name),l.a.createElement("p",null,a.type[0].name," | ",a.type[1].name),l.a.createElement("p",null,a.Cuisine[0].name," | ",a.Cuisine[1].name)),l.a.createElement(z.c,null,l.a.createElement("p",null,a.address),l.a.createElement("p",null,"Call Us: 9765197281")))),l.a.createElement("div",{className:"row"},l.a.createElement(s.b,{to:"/list/".concat(sessionStorage.getItem("mealid")),className:"btn btn-danger"},"Back"),"\xa0",l.a.createElement(s.b,{to:"/booking/".concat(a._id),className:"btn btn-success"},"Place Order")))))):l.a.createElement("div",null,l.a.createElement("img",{src:"images/foodloader.gif"}))}(e))}),q=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={details:""},e}return Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement(H,{restData:this.state.details})))}},{key:"componentDidMount",value:function(){var e=Object(B.a)(R.a.mark((function e(){var a,t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("".concat("https://edumatorestapi.herokuapp.com/restaurantdetails","/").concat(a));case 3:t=e.sent,this.setState({details:t.data[0]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),G=Object(o.e)((function(e){console.log("functional>>>",e.location.search.split("=")[1]);return l.a.createElement("div",{className:"container"},l.a.createElement("center",null,l.a.createElement("h3",null,"Orders Details")),l.a.createElement("table",{className:"table table-dark table-responsive"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Order Id"),l.a.createElement("th",null,"Rest Name"),l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Phone"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"No. Person"))),l.a.createElement("tbody",null,function(e){var a=e.orderdata;if(a)return a.map((function(e){return l.a.createElement("tr",{key:e._id},l.a.createElement("td",null,e._id),l.a.createElement("td",null,e.rest_id),l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.address),l.a.createElement("td",null,e.person))}))}(e))))})),J=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).state={orders:""},e}return Object(i.a)(t,[{key:"render",value:function(){return console.log("class",this.props),l.a.createElement("div",{className:"container"},l.a.createElement(G,{orderdata:this.state.orders}))}},{key:"componentDidMount",value:function(){var e=Object(B.a)(R.a.mark((function e(){var a;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.a.get("".concat("https://edumatorestapi.herokuapp.com/orders"));case 2:a=e.sent,this.setState({orders:a.data});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),t}(n.Component),L=function(e){Object(u.a)(t,e);var a=Object(d.a)(t);function t(){var e;return Object(m.a)(this,t),(e=a.call(this)).handleChangeName=function(a){e.setState({name:a.target.value})},e.handleChangePhone=function(a){e.setState({phone:a.target.value})},e.handleChangePerson=function(a){e.setState({person:a.target.value})},e.handleSubmit=function(){fetch("https://edumatorestapi.herokuapp.com/placeorder",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e.state)}).then(e.props.history.push("/viewBooking?message=Success"))},e.state={order_id:Math.floor(1e4*Math.random()),rest_name:"",name:"",phone:"",person:""},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(B.a)(R.a.mark((function e(){var a,t;return R.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.match.params.id,e.next=3,y.a.get("".concat("https://edumatorestapi.herokuapp.com/restaurantdetails","/").concat(a));case 3:t=e.sent,this.setState({rest_name:t.data[0].name});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return console.log(this.props),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"panel panel-info"},l.a.createElement("div",{className:"panel-heading"},l.a.createElement("h4",null,"Place Your Order")),l.a.createElement("div",{className:"panel-body"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Order_Id"),l.a.createElement("input",{type:"text",name:"order_id",value:this.state.order_id,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Rest Name"),l.a.createElement("input",{type:"text",name:"rest_name",value:this.state.rest_name,readOnly:!0,className:"form-control"})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",name:"name",value:this.state.name,className:"form-control",onChange:this.handleChangeName})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Phone"),l.a.createElement("input",{type:"text",name:"phone",value:this.state.phone,className:"form-control",onChange:this.handleChangePhone})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Person"),l.a.createElement("select",{type:"text",name:"person",value:this.state.person,className:"form-control",onChange:this.handleChangePerson},l.a.createElement("option",{value:"1"},"One"),l.a.createElement("option",{value:"2"},"Two"),l.a.createElement("option",{value:"3"},"Three"))),l.a.createElement(s.b,{to:"/details/".concat(this.props.match.params.id),className:"btn btn-danger"},"Back")," \xa0",l.a.createElement("button",{className:"btn btn-success",onClick:this.handleSubmit},"Submit"))))}}]),t}(n.Component),U=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement(N,null),l.a.createElement(o.a,{exact:!0,path:"/",component:f}),l.a.createElement(o.a,{path:"/list/:id",component:M}),l.a.createElement(o.a,{path:"/details/:id",component:q}),l.a.createElement(o.a,{path:"/viewBooking",component:J}),l.a.createElement(o.a,{path:"/booking/:id",component:L}),l.a.createElement(g,null)))};r.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.e066a55c.chunk.js.map