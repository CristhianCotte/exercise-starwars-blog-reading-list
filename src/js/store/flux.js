

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			urlBase: "https://www.swapi.tech/api",
			people: JSON.parse(localStorage.getItem("people")) || [],
			vehicles: JSON.parse(localStorage.getItem("vehicles")) || [],
			planets: JSON.parse(localStorage.getItem("planets")) || [],
			endPoints: ["people", "vehicles", "planets"],
			favorites: JSON.parse(localStorage.getItem("favorites")) || [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			fetchItems: async () => {
				let store = getStore();
				if (!store.people.length) {
					for (let endPoint of store.endPoints) {
						try {
							let response = await fetch(`${store.urlBase}/${endPoint}`);
							if (response.ok) {
								let data = await response.json();
								// console.log(data.results)
								data.results.map(async (item) => {
									let responseTwo = await fetch(`${store.urlBase}/${endPoint}/${item.uid}`)
									let result = await responseTwo.json();
									// console.log(result)
									setStore({
										...store,
										[endPoint]: [...store[endPoint], result.result]
									});
									localStorage.setItem(endPoint, JSON.stringify(store[endPoint]))
								});
							}
						} catch (error) {
							console.log("Error :", error)
						}
					}
				}

			},

			// setStore({
			// 	...store, favorites:[...store.favorites, item]
			// })
			// localStorage.setItem(favorites, JSON.stringify(getStore().favorites))
			// if(!store.favorites.length){
			// 	setStore({
			// 		...store, favorites:[...store.favorites, item]
			// 	})
			// 	// localStorage.setItem("favorites",JSON.stringify(getStore().favorites))
			// }
			// 			if(localStorage.getItem("favorites")){
			// 		setStore({
			// 			...store,
			// 			favorites: JSON.parse(localStorage.getItem("favorites"))
			// 		})
			// 	}else{

			// 		setStore({
			// 			...store, favorites:[...store.favorites, item]
			// 		});
			// 		localStorage.setItem("favorites",JSON.stringify(getStore().favorites))
			// 	}

			// console.log(item)
			addFavorites: (id) => {
				const store = getStore();
				let existe = store.favorites.find((item) => {
					return item._id == id
				})
				if (!existe) {
					for (let endPoint of store.endPoints) {
						let favorite;
						favorite = store[endPoint].find((item) => {
							return item._id == id
						})
						if (favorite) {
							setStore({
								...store,
								favorites: [...store.favorites, favorite]
							});
							localStorage.setItem("favorites", JSON.stringify(getStore().favorites))
							alert(`Has agregado ${favorite.properties.name} a tus favoritos `)
							break;
							
						}
						
					}
				} else {
					let newFavorites = store.favorites.filter((item) => {
						return item._id != id
					})
					setStore({
						...store,
						favorites: newFavorites
					})
				}


			},
			clearFavorites: (id) => {
				const store = getStore();
				let newFavorites = store.favorites.filter((item) => {
					return item._id != id
				})
				setStore({
					...store,
					favorites: newFavorites
				})

			},

			// setFavirutes: () => {

			// },
			// getPeople: async () =>{
			// 	try {
			// 		const store = getStore();

			// 		if(localStorage.getItem("people")){
			// 			setStore({
			// 				...store,
			// 				people: JSON.parse(localStorage.getItem("people"))
			// 			})
			// 		}else{
			// 			let responseTres = await fetch(`${store.urlBase}/people`);
			// 			let dataTres = await responseTres.json();
			// 			setStore({
			// 				... store, 
			// 				people: dataTres.results,
			// 			});
			// 			localStorage.setItem("people",JSON.stringify(getStore().people))
			// 		}


			// 	} catch (error) {
			// 		console.log("Explote",error)
			// 	}
			// },

			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });

			}
		}
	};
};

export default getState;
