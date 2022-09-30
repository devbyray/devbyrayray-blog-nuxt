---
title: How To Build A Serverless Webshop — part 2
description: Product list and detail view with Angular
date: '2020-07-30'
categories: \[]
published: true
tags: ['TypeScript', 'JavaScript', 'Angular', 'FaunaDB', 'Serverless functions']
image: https://miro.medium.com/max/1280/0*cAnIYaAnz3zzWt5t
---

## Product list and detail view with Angular

This is a 6 parts series to build a webshop application with [Angular](https://angular.io), [Netlify](https://www.netlify.com) Serverless functions in combination with [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWebshopWorkshop_part2_Raymon).

## **Series**

1.  [Connect Angular and FaunaDB with Netlify Serverless functions](/post/2020-07-08-serverless-functions-webshop-faunadb-netlify-angular)
2.  Product list and detail view with Angular
3.  Create crud for products and show products on an Angular page.
4.  Setup Authentication to register and log in (so people can shop)
5.  Create a shopping cart to order products.
6.  Best practices on how to use [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWebshopWorkshop_part2_Raymon) with Netlify Serverless functions

In this part of the series, we are going to explore how to get product data from the [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWebshopWorkshop_part2_Raymon) database serverless functions in Netlify and show it in our Angular application.

If you didn’t follow the previous tutorial in this series, please check that out first, this will make following this tutorial much easier.

Let’s get our hands dirty!

_Happy coding! 🚀_

## 1. Clean up

Let’s clean the app.component.html so that we have a blank canvas to work with.

```html
<div class="toolbar" role="banner">
    <span class="name">FaunaDB Webshop</span>
</div>

<div class="content" role="main">
    <h1>Products</h1>

    <router-outlet></router-outlet>
</div>
```

See it in the [Github repository](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/blob/clean-application/src/app/app.component.html).

And the app.component.scss file needs some basic styling from the app.component.html. The styling is nothing special, basically copied and cleaned from what was already there.

```sass
:host {
    font-family: -apple-system, BlinkMacSystemFont, 
    'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 
    'Apple Color Emoji', 'Segoe UI Emoji',
        'Segoe UI Symbol';
    font-size: 14px;
    color: #333;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 8px 0;
}

p {
    margin: 0;
}

.spacer {
    flex: 1;
}
.name {
    margin-left: 2rem;
}

.toolbar {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1976d2;
    color: white;
    font-weight: 600;
}

.toolbar img {
    margin: 0 16px;
}

.toolbar #twitter-logo {
    height: 40px;
    margin: 0 16px;
}

.toolbar #twitter-logo:hover {
    opacity: 0.8;
}

.content {
    display: flex;
    margin: 82px auto 32px;
    padding: 0 16px;
    max-width: 960px;
    flex-direction: column;
    align-items: center;
}

a,
a:visited,
a:hover {
    color: #1976d2;
    text-decoration: none;
}

a:hover {
    color: #125699;
}
```

See it in the [Github repository](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/blob/clean-application/src/app/app.component.scss).

## 2. Show product list data

Thanks to the function that refilled the data of the [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWebshopWorkshop_part2_Raymon) database we already have some data to visualize our list of products.

## Product model

To get the most out of TypeScript, we have to make a product model that is the same as we get back from the FaunaDB API.

ng generate class products_models_product

This will generate a class for us in which we can define the data structure. (Yes we could make an interface, but for now, I keep it simple).

```typescript
export class Product {
    ref: any = null
    ts: number = 0
    data: ProductData = null

    constructor(data) {
        this.ref = data.ref
        this.ts = data.ts
        this.data = new ProductData(data.ref['@ref'].id, data.data)
    }
}

export class ProductData {
    name: string = ''
    description: string = ''
    price: number = 0
    quantity: number = 0
    storehouse: any = null
    backorderLimit: number = 0
    backordered = false
    image?: string = ''
    id: string = ''

    constructor(id, data) {
        console.log('id: ', typeof id)
        this.id = id
        this.name = data.name
        this.description = data.description
        this.price = data.price
        this.quantity = data.quantity
        this.storehouse = data.storehouse
        this.backorderLimit = data.backorderLimit
        this.backordered = data.backordered
        this.image = data.image || ''
    }
}
```

## Environment

To make sure we can call our serverless function locally and on our staging environment, we have to use the Angular environment file. Make sure you import the environment file in every service which calls the API.

In the environments/environment.ts we set a property apiUrl with a value to the local API.

```typescript
export const environment = {
    production: false,

    apiUrl: 'http://localhost:9000/.netlify/functions/',
}
```

In the environments/environment.prod.ts we set the value of apiUrl to the URL of our Netlify environment.

```typescript
export const environment = {
    production: true,

    apiUrl: 'https://ng-serverless-faunadb.netlify.app/.netlify/functions/',
}
```

In our package.json we have to add another command npm run build:prod to create a production build.

```json
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "build:prod": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e",
    "fn:serve": "netlify-lambda serve functions",
    "fn:build": "netlify-lambda build functions"
},
```

In the Netlify settings, you can configure that command to be used.

[](Screenshot%202020-07-03%20at%2022.26.19.png)

## Product Service

Now we can create a service that we can call from our component. This endpoint is going to retrieve the product data from the database.

ng generate service products_service_product

This command creates the following directory src_app_products_service_ with a product.service.ts file in there. Add a method for getting all the products from our serverless function.

```typescript
import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'

import { Product, ProductData } from '../models/product'

import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    public async getProducts(): Promise<ProductData[]> {
        let products = null

        let productsWithImages = null

        try {
            products = await this.http.get<Product[]>(environment.apiUrl + 'products').toPromise()

            productsWithImages = products.map(
                (productItem: Product) => new Product(this.getProductImage(productItem)).data
            )
        } catch (error) {
            console.error(error)
        }

        return productsWithImages
    }

    private getProductImage(product: Product): Product {
        const tempProduct = { ...product }

        switch (tempProduct.data.name) {
            case 'Pizza':
                tempProduct.data.image =
                    'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'

                break

            case 'Beef Cheek':
                tempProduct.data.image =
                    'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'

                break

            case 'Cup':
                tempProduct.data.image =
                    'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'

                break

            default:
                break
        }

        return tempProduct
    }
}
```

We created the products function in the previous post. If you miss that, check it out before you continue.

Create a `<product-list>` component to call the ProductService from there. Run the following command to have it created for you.

## Product List Component

ng generate component products_components_product-list

This is how we are going to call our getProducts method from the ProductService in the ProductListComponent. In the ngOnInit I call the service and add additional images for the products. (Normally you would have added that to the database.)

```typescript
import { Component, OnInit } from '@angular/core'

import { ProductService } from '../../service/product.service'

import { Product, ProductData } from '../../models/product'

@Component({
    selector: 'product-list',

    templateUrl: './product-list.component.html',

    styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
    products: ProductData[] = []

    constructor(private product: ProductService) {}

    ngOnInit(): void {
        this.product.getProducts().then((products: ProductData[]) => {
            this.products = products
        })
    }
}
```

## Routing

To make sure that everything we show in the product-list.component.html will be shown on our home view, we have to configure the app-routing.module.ts.

```typescript
import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { ProductListComponent } from './products/components/product-list/product-list.component'

const routes: Routes = [
    {
        path: '',

        component: ProductListComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule {}
```

## Show Product Data

Let’s put a pre tag in our product-list.component.ts to show how the product data from the API.

```html
<pre>

{{ products | json }}

</pre>
```

## 3. Visualize the products

We are receiving all our products from the database. If this would be a webshop for a client to build you might want to consider pagination. But in this tutorial, I leave that up to you.

Since we get an Array of Objects from our endpoint, we simply loop through it with the \*ngFor on an ng-container element. For every product, there will be a section with a class product\_\_item in the HTML to show the product information.

```html
<div class="products__container">
    <ng-container *ngFor="let product of products">
        <section class="product__item">
            <figure class="product__figure">
                <img *ngIf="product.image" class="product__image" [src]="product.image" alt="" />
            </figure>

            <a [routerLink]="['/product/' + product.id]">
                <div class="product__content">
                    <strong class="product__title">{{ product.name }}</strong>

                    <em class="product__price">{{ product.price | currency: 'EUR' }}</em>
                </div>
            </a>
        </section>
    </ng-container>
</div>
```

I have added some additional styling to make it a bit nicer.

```sass
:host {
    width: 100%;
    --productSize: 400px;
}

.products__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: var(--productSize);
    grid-gap: 1rem;
}

.product {
    &__item {

    position: relative;

    overflow: hidden;

    background: #fff;

    border-radius: 10px;

    -webkit-box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.28);

    -moz-box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.28);

    box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.28);

    }

    &__title {
        font-size: 2rem;
    }

    &__content {
        display: flex;
        padding: 1rem;
    }

    &__price {
        margin-left: auto;
        font-size: 2.6rem;
        color: #000;
    }

    &__image {
        height: calc(var(--productSize) - 100px);
        width: 100%;
        object-fit: cover;
    }

    &__figure {
        height: calc(var(--productSize) - 100px);
        width: 100%;
        padding: 0;
        margin: 0;
    }
}
```

The webshop looks now something like this. Feel free to play around with the styling yourself.

[](Screenshot%202020-07-03%20at%2021.45.15.png)

See it in the [Github repository](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/tree/create-product-detail-page/src/app/products/components/product-list). The live version of the webshop can [be found on Netlify](https://5ef8fb6088e4b7be14e4ec73--ng-serverless-faunadb.netlify.app&sa=D&ust=1596037517505000&usg=AOvVaw1Of3NJm4wpjXHaf7ov7Vn5).

## 4. Show product detail

To visit every product detail page we need to create a product-item component and define a route in our app.routes.ts.

## Product item component

Run the command below to create the product-item component in the correct directory.

```bash
ng generate component products/components/product-item
```

Open the app.routes.ts to add the new route.

```typescript
import { NgModule } from '@angular/core'

import { Routes, RouterModule } from '@angular/router'

import { ProductListComponent } from './products/components/product-list/product-list.component'

import { ProductItemComponent } from './products/components/product-item/product-item.component'

const routes: Routes = [
    {
        path: '',

        component: ProductListComponent,
    },

    {
        path: 'product/:id',

        component: ProductItemComponent,
    },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],

    exports: [RouterModule],
})
export class AppRoutingModule {}
```

We define a new route for product/:id. The :id will become our product ID which we get back from the Fauna API.

In our product-item component we can hook into the router and get that Id. This ID will be used in our service to call our serverless function.

## Product By Id Function

Open the lib/product-service.js to add another method getProductById for getting a product by id.

```typescript
import faunadb from 'faunadb'

const q = faunadb.query

export class ProductService {
    constructor(data) {
        this.client = data.client
    }

    async getProducts() {
        return new Promise((resolve, reject) => {
            const query = q.Let(
                {
                    productRefs: q.Paginate(q.Match(q.Ref('indexes/all_products'))),

                    products: q.Map(q.Var('productRefs'), q.Lambda(['ref'], q.Get(q.Var('ref')))),
                },

                q.Var('products')
            )

            this.client

                .query(query)

                .then((response) => {
                    resolve(response)
                })

                .catch((error) => {
                    console.log('error', error)

                    reject(error)
                })
        })
    }

    async getProductById(id) {
        return new Promise((resolve, reject) => {
            if (!id) {
                reject('No ID provided')
            }

            this.client

                .query(q.Get(q.Ref(q.Collection('products'), id)))

                .then((response) => {
                    console.log('response', response)

                    resolve(response)
                })

                .catch((error) => {
                    console.log('error', error)

                    reject(error)
                })
        })
    }
}
```

Now create a file product-by-id.js in the functions folder.

```typescript
import { ProductService } from '../lib/product-service.js'

import { client, headers } from '../lib/config.js'

const service = new ProductService({ client })

exports.handler = async (event, context) => {
    console.log('Function ` products ` invoked')

    const { path } = event

    const productId = path.substr(path.lastIndexOf('/') + 1)

    if (!productId) {
        return {
            statusCode: 400,

            headers,

            body: JSON.stringify({ message: 'Product ID is missing' }),
        }
    }

    if (event.httpMethod !== 'GET') {
        return { statusCode: 405, headers, body: 'Method Not Allowed' }
    }

    try {
        const product = await service.getProductById(productId)

        return {
            statusCode: 200,

            headers,

            body: JSON.stringify(product),
        }
    } catch (error) {
        console.log('error', error)

        return {
            statusCode: 400,

            headers,

            body: JSON.stringify(error),
        }
    }
}
```

In the function, we first check if we have a product ID in the URL. The call we would do will look like this <http://localhost:9000/.netlify/functions/product-by-id/266790280843231752>. So the last string after the latest / will be our product ID.

Before you commit this, I highly recommend testing this locally first.

## Call API on Product Item

Let’s add a method to our product.service.ts for getting the information in our product-item component.

```typescript
import { Injectable } from '@angular/core'

import { HttpClient } from '@angular/common/http'

import { Product, ProductData } from '../models/product'

import { environment } from 'src/environments/environment'

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    constructor(private http: HttpClient) {}

    public async getProducts(): Promise<ProductData[]> {
        let products = null

        let productsWithImages = null

        try {
            products = await this.http.get<Product[]>(environment.apiUrl + 'products').toPromise()

            productsWithImages = products.map(
                (productItem: Product) => new Product(this.getProductImage(productItem)).data
            )
        } catch (error) {
            console.error(error)
        }

        return productsWithImages
    }

    public async getProductById(id): Promise<ProductData> {
        if (!id) return

        const product = await this.http.get<Product>(environment.apiUrl + 'product-by-id/' + id).toPromise()

        return new Product(this.getProductImage(product)).data
    }

    private getProductImage(product: Product): Product {
        const tempProduct = { ...product }

        console.log('tempProduct:', tempProduct)

        switch (tempProduct.data.name) {
            case 'Pizza':
                tempProduct.data.image =
                    'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'

                break

            case 'Beef Cheek':
                tempProduct.data.image =
                    'https://images.unsplash.com/photo-1588168333986-5078d3ae3976?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'

                break

            case 'Cup':
                tempProduct.data.image =
                    'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=640&q=80'

                break

            default:
                break
        }

        return tempProduct
    }
}
```

Now call the getProductById method from the service in our component.

```typescript
import { Component, OnInit } from '@angular/core'

import { ActivatedRoute } from '@angular/router'

import { ProductService } from '../../service/product.service'

import { ProductData } from '../../models/product'

@Component({
    selector: 'app-product-item',

    templateUrl: './product-item.component.html',

    styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent implements OnInit {
    public id: string = ''

    public productItem: ProductData = null

    constructor(private product: ProductService, private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params?.id
        })

        this.product.getProductById(this.id).then((data: ProductData) => {
            this.productItem = data
        })
    }
}
```

As you can see we import the ActivateRoute to get access to the id parameter in the URL. We do that in the ngOnInit so this will be executed immediately after the component is ready.

We store the product ID in ‘this.id’ and use it to call the getProductById method. When we receive the data from the serverless function, we store it in the productItem property.

Now we can show the information about the product via the product-item.component.html.

```html
<ng-container *ngIf="productItem">
    <section class="product__item">
        <h1 class="product__title">{{ productItem.name }}</h1>

        <ng-container *ngIf="productItem.image">
            <figure class="product__figure">
                <img
                    loading="lazy"
                    *ngIf="productItem.image"
                    width="640px"
                    class="product__image"
                    [src]="productItem.image"
                    alt=""
                />
            </figure>
        </ng-container>

        <div class="product__content">
            <p class="product__description">{{ productItem.description }}</p>
        </div>

        <footer class="product__footer">
            <em class="product__price">{{ productItem.price | currency: 'EUR' }}</em>

            <button class="product__card-btn" mat-flat-button>Add to cart</button>
        </footer>
    </section>
</ng-container>
```

To make it nicer for the user to see in the browser I’ve created a simple layout that comes from the product-list.component.scss.

```sass
:host {
    width: 100%;
    --productSize: 400px;
}

.products__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: var(--productSize);
    grid-gap: 1rem;
}
.product {
    &__item {
        position: relative;
        overflow: hidden;
        background: #fff;
        border-radius: 10px;
        -webkit-box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.28);
        -moz-box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.28);
        box-shadow: 0px 0px 23px -7px rgba(0, 0, 0, 0.28);
    }
    &__title {
        font-size: 2rem;
    }
    &__content {
        display: flex;
        padding: 1rem;
    }
    &__price {
        margin-left: auto;
        font-size: 2.6rem;
        color: #000;
    }
    &__image {
        height: calc(var(--productSize) - 100px);
        width: 100%;
        object-fit: cover;
    }
    &__figure {
        height: calc(var(--productSize) - 100px);
        width: 100%;
        padding: 0;
        margin: 0;
    }
}

```

The result looks like this.

[](Screenshot%202020-07-04%20at%2015.35.38.png)

See it in the [Github repository](https://github.com/DevByRayRay/ng-faunadb-netlify-serverless-functions/tree/create-product-detail-page/src/app/products/components/product-list). The live version of the webshop can [be found on Netlify](https://5ef8fb6088e4b7be14e4ec73--ng-serverless-faunadb.netlify.app&sa=D&ust=1596037517532000&usg=AOvVaw0tWZBmDBxYw6NyBrUIJ0eU).

## Conclusion

As you can see with the ease of using [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWebshopWorkshop_part2_Raymon) and serverless functions you can easily build a serious webshop. Everything you do is Frontend development that’s what I think is making it so cool.

The API of [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWebshopWorkshop_part2_Raymon) is super easy and flexible to get our product list and detail. Let me know in the comments what you think of it.

Next time we are gonna focus on the CRUD views to manage our products. If you can’t wait for that, start experimenting with what we already build in this tutorial.

_Happy Coding 🚀_

## **Conclusion**

Now we have learned how to make a serverless function, get data from the [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) and retrieve it in the Angular application.

Next time we go a step further with Angular, [FaunaDB](https://dashboard.fauna.com/accounts/register?utm_source=ByRayRay&utm_medium=referral&utm_campaign=WritewithFauna_BuildServerlessWorkshop_Raymon) and Netlify’s serverless function. If you can’t wait for the next tutorial, please experiment a bit more with what we already have build.

_Happy Coding 🚀_

> I’ve gathered a couple of [aspiring developers around the world on a Discord server](https://mailchi.mp/fb82491d03f8/dev-by-rayray-discord-community), feel free if you like to join in.
