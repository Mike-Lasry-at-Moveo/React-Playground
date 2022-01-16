enum Actions {
    ADD = 'add-action',
    REMOVE = 'remove-action',
    CLEAR = 'clear-action',
}

enum Title{
    MAIN = 'React Meals',
    INVERT = 'Meals React',

}

enum Errors {
    ERR = 'Something went wrong!'
}

enum InputType {
    NUM = 'number',
    SUB = 'submit',
    PW = 'password',
    TEXT = 'text',
    BTN = 'button',
    
}

enum Fields {
    NAME = 'name',
    STREET = 'street',
    
}

enum Str {
    ALT_FOOD_TABLE = 'A table full of delicious food!',
    AMOUNT = 'Amount',
    INP = 'input',
    
    US = '_',
    EMPTY = '',
    SPACE = ' ',
    
    NAME = 'name',
    STREET = 'street',
    
    POSTAL_CODE = 'postal-code',
    CITY = 'city',
}

enum ClassName {
    HEADER = 'header',
    MAIN_IMG = 'mainImage',
    TOP_PAGE = 'topPage',
    CART_BTN = 'cartButton',
    CART_COUNT = 'cartCount',
    CART_ITEM = 'cartItem',
    CART_ITEMS = 'cartItems',
    
    CART = 'cart',
    CARD = 'card',
    BTN = 'button',
    MEAL = 'meal',
    PRICE = 'price',
    CONTROL = 'control',
    DESC = 'description',
    TOATL = 'total',
    ACTS = 'actions',
    CONTENT = 'content',
    SUMMARY = 'summary',
    AMOUNT = 'amount',
    FORM = 'form',
    INVALID = 'invalid',

    ALL_MEALS = 'mealsList',
    MEALS_SUM = 'mealsSummary',
    MEAL_ITEM_FORM = 'mealItemForm',
    MEALS_LOADER = 'mealsLoading',
    MEALS_ERR = 'mealsError',

    INP = 'input',
    ADD_TO_CART = 'addToCart',

    BTN_ALT = 'buttonAlt',
    BTN_ORDER = 'buttonOrder',
    BUMP = 'bump',
   
    HEADER_TITLE = 'headerTitle',
    // Modal
    MODAL = 'modal',
    BCK_DRP = 'backdrop',
    OVERLAYS = 'overlays',
}

export {
    Errors,
    ClassName,
    Str,
    InputType,
    Actions,
    Title,
    Fields,
};