$(document).ready(function () {
    buildProductListView(products);
});

// Filter by Category//
let brandName;

for (let i = 0; i < document.querySelectorAll(".boo").length; i++) {
    document.querySelectorAll(".boo")[i].addEventListener("click", function () {
        brandName = this.innerHTML;
        brandFilter();
    });
}

function brandFilter() {
    let brandPro = products.filter((elem) => {
        if (elem.category === brandName) {
            return true;
        } else {
            return false;
        }
    });
    buildProductListView(brandPro)
};


// Filter by Material//
let materialName;

for (let i = 0; i < document.querySelectorAll(".check-mater").length; i++) {
    document.querySelectorAll(".check-mater")[i].addEventListener("click", function () {
        materialName = this.innerHTML;
        materialFilter();
    });
}

function materialFilter() {
    let materialPro = products.filter((elem) => {
        if (elem.material === materialName) {
            return true;
        } else {
            return false;
        }
    });
    buildProductListView(materialPro)
};

// Filter by price
let priceName;

for (let i = 0; i < document.querySelectorAll(".check-price").length; i++) {
    document.querySelectorAll(".check-price")[i].addEventListener("click", function () {
        priceName = this.innerHTML;
        priceFilter();
    });
}

function priceFilter() {
    let pricePro = products.filter((elem) => {
            if (priceName === '$0-$10') {
                if (elem.price > 0 && elem.price < 10) {
                    return true
                } else {
                    return false
                }
            } else if (priceName === '$10-$15') {
                if (elem.price > 10 && elem.price < 15) {
                    return true
                } else {
                    return false
                }
            } else if (priceName === '$15-$25') {
                if (elem.price > 15 && elem.price < 25) {
                    return true
                } else {
                    return false
                }
            } else if (priceName === '$25-$100') {
                if (elem.price > 25 && elem.price < 100) {
                    return true
                } else {
                    return false
                }
            } else if (priceName === '$100-$up') {
                if (elem.price > 100 && elem.price < 3000) {
                    return true
                } else {
                    return false
                }
            }
            }); buildProductListView(pricePro)
    };







    // Sort by Price//
    function priceSort() {
        $(".nav-link").addClass("active")
        $("#price-active").removeClass("active");
        let pricePro = products.sort((a, b) => {
            return a.price - b.price
        });
        buildProductListView(pricePro);
    };

    // Sort by Popularity//
    function rateSort() {
        $(".nav-link").addClass("active")
        $("#popular-active").removeClass("active");
        let ratePro = products.sort((a, b) => {
            return a.rate - b.rate
        });
        buildProductListView(ratePro);
    };


    // Sort by Popularity2//
    function rateSortt() {
        $(".nav-link").addClass("active")
        $("#favorite-active").removeClass(["active"]);
        let ratePro = products.sort((a, b) => {
            return b.rate - a.rate
        });
        buildProductListView(ratePro);
    };








    function buildProductListView(elements) {
        $("#products").empty();
        elements.forEach(elem => {
            let proHtml = '<div class="col-3">' +
                '<div class="card" style="width: 18rem;">' +
                '<img class="card-img-top card-img-top hvr-glow hvr-float-box-shadow-outset hvr-fade" src="' + elem.image + '">' +
                '<div class="card-body">' +
                '<h5 class="card-title">' + elem.title + '</h5>' +
                '<p class="card-text">' + elem.price + '</p>' +
                '<div class="card-footer">' +
                '<small class="text-muted"> 💖' + elem.rate + '</small>' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            $("#products").append(proHtml);

        });
    };