import $ from '../core';

$.prototype.collapse = function(headActive = 'collapse__head-active', 
                                contentActive = 'collapse__content-active',
                                paddings = 40) {
    for (let i = 0; i < this.length; i++) {
        $(this[i]).click(() => {
            $(this[i]).toggleClass(headActive);
            $(this[i].nextElementSibling).toggleClass(contentActive);
        
            if (this[i].classlist.contains(headActive)) {
                this[i].nextElementSibling.style.maxHeight = 
                    this[i].nextElementSibling.scrollHeight + paddings + 'px';
            } else {
                this[i].nextElementSibling.style.maxHeight = '0px';
            }
        });
    }
};

$('.collapse__head').collapse();