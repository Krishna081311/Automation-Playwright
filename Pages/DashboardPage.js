class DashboardPage
{

constructor(page)
{
    this.Products = page.locator('.card-body');
    this.ProductsText = page.locator('.card-body b');
    this.Cart = page.locator('[routerlink="/dashboard/cart"]');

}





}

module.exports = {DashboardPage};