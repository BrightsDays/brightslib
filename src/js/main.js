import $ from './libr/libr';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-count="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('#trigger').click(() => {
    $('#trigger').createModal({
        text: {
            title: 'Modal title',
            body: 'Modal body is here, Modal body is here'
        },
        btns: {
            count: 2,
            settings : [
                [
                    'Close',
                    ['btn-danger', 'mr-10'],
                    true
                ],
                [
                    'Save changes',
                    ['btn-success'],
                    false,
                    () => {
                        alert('Сохранено');
                    }
                ]
            ]
        }
    }); 
});

$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));