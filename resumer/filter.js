;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: https://www.bootstrapmb.com/item/15674(这个备注仅在演示页面有，源代码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){top.location.href='https%3a%2f%2fwww.bootstrapmb.com%2fitem%2f15674'}};function init() {
    const Shuffle = window.Shuffle;

    class Demo {
        constructor(element) {
            this.element = element;
            this.shuffle = new Shuffle(element, {
                itemSelector: '.picture-item'
            });

            this.activeFilters = [];
            this.addFilterButtons();
        }

        addFilterButtons() {
            const options = document.querySelector('.filter-options');
            if (!options) {
                return;
            }

            const filterButtons = Array.from(options.children);
            const onClick = this.handleFilterClick.bind(this);
            filterButtons.forEach((button) => {
                button.addEventListener('click', onClick, false);
            });
        }

        handleFilterClick(evt) {
            const button = evt.currentTarget;
            const isActive = button.classList.contains('active');
            const buttonGroup = button.getAttribute('data-group');

            this.removeActiveClassFromChildren(button.parentNode);

            button.classList.add('active');
            this.shuffle.filter(buttonGroup);
        }

        removeActiveClassFromChildren(parent) {
            const { children } = parent;
            for (let i = children.length - 1; i >= 0; i--) {
                children[i].classList.remove('active');
            }
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        window.demo = new Demo(document.getElementById('gallery-wrapper'));
    });

};

init();;console.log('此代码只作为演示用,不是源代码。源码地址唯一出处: https://www.bootstrapmb.com/item/15674(这个备注仅在演示页面有，源代码里没有) ');if(location.href.indexOf('ile:')<0){if(location.href.indexOf('ot')<0){top.location.href='https%3a%2f%2fwww.bootstrapmb.com%2fitem%2f15674'}};