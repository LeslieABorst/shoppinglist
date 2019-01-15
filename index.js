"use strict"

new Vue ({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'shopping list app',
        newItem: '',
        items: [
            {
                label: '10 party hats',
                purchased: false,
            },
            {
                label: '2 board games',
                purchased: false,
            },
            {
                label: '20 cups',
                purchased: false,
            },
        ],
    },
    methods: {
        saveItem: function() {
            this.items.push({
                label: this.newItem,
                purchased: false,
            },);
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';
        },
        togglePurchased: function(item) {
            item.purchased = !item.purchased;

        },
        emptyList: function() {
            this.items = [];
        },
        emptyButton: function(purchases) {
            return purchases.purchased === true;
        }
    },
    computed: {
        showEmpty: function() {
            return this.items.every(this.emptyButton);
        }
    }
});