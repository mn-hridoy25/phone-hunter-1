// api link---  https://openapi.programming-hero.com/api/phones?search=iphone

const phoneData = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhone(phones);
}

const displayPhone = phones => {
    // console.log(phones);

    const phoneContainer = document.getElementById('phone-container')
    // clear all when search another things
    phoneContainer.innerText = '';

    // console.log(phones.length);

    //'show all phones' button show korar condition
    const showAllContainer = document.getElementById('show-all-container')
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden')
    }
    else {
        showAllContainer.classList.add('hidden')
    }

    // display only first 10 phones
    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card p-4 rounded-xl bg-gray-100 shadow-xl`
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" />
        </figure>
                <div class="card-body">
                    <h2 class="card-title">${phone.phone_name}</h2>
                    <p>${phone.brand}</p>
                    <p> Price: ${phone.price}</p>
                    <div class="card-actions justify-end">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
        `
        phoneContainer.appendChild(phoneCard);
    });
    seeLoader(false);
}

const searchHandler = () => {
    // console.log('added');
    seeLoader(true)
    const searchField = document.getElementById('search-field')
    const searchText = searchField.value;
    console.log(searchText);
    phoneData(searchText);
}

const seeLoader = (isLoading) => {
    const loaderSpinner = document.getElementById('loader')
    if (isLoading) {
        loaderSpinner.classList.remove('hidden')
    }
    else {
        loaderSpinner.classList.add('hidden')
    }
}

// phoneData();