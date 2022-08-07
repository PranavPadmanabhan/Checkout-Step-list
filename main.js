const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const modal = document.querySelector('#modal');
const modal_title = document.querySelector('.modal-title');
const closeBtn = document.querySelector('#close');
const color_picker_1 = document.querySelector('#color-input-1');
const color_picker_2 = document.querySelector('#color-input-2');
const hex_code_1 = document.querySelector('#hex-code-1');
const hex_code_2 = document.querySelector('#hex-code-2');
const save_button = document.querySelector('.save');
const content_settings_checkbox = document.querySelector('#content-settings');
const modal_input_1 = document.querySelector('#input-1');
const modal_input_2 = document.querySelector('#input-2');
const modal_check_1 = document.querySelector('#check-1');
const modal_check_2 = document.querySelector('#check-2');
const modal_custom_content_input = document.querySelector('#custom-content');
const color_input_section = document.querySelector('.color-input-section')
const position  = document.querySelector('#position');
const enable_button = document.querySelector('#enable-step');
const reset_button = document.querySelector('.reset');
const save_button_title = document.createElement('span');
const reset_button_title = document.createElement('span');
save_button.appendChild(save_button_title);
reset_button.appendChild(reset_button_title)




let steps = [
    {
        enabled:true,
        name : 'Login',
        stepTitle:'Login',
        indexType: 'text',
        contentSettingsEnabled:true,
        currentBackgroundColor:'#3e32ac',
        currentFontColor:'#0000',
        customContent:'test',
        displayOption:'Above the default fields'

    },
    {
        enabled:true,
        name : 'Billing',
        stepTitle:'Billing',
        indexType: 'icon',
        contentSettingsEnabled:true,
        currentBackgroundColor:'#ffff',
        currentFontColor:'#0000',
        customContent:'test',
        displayOption:'Above the default fields'

    },
    {
        enabled:true,
        name : 'Shipping',
        stepTitle:'Shipping',
        indexType: 'text',
        contentSettingsEnabled:true,
        currentBackgroundColor:'#3e32ac',
        currentFontColor:'#0000',
        customContent:'test',
        displayOption:'Below the default fields'

    },
    {
        enabled:true,
        name : 'Order Info',
        stepTitle:'Order Info',
        indexType: 'icon',
        contentSettingsEnabled:false,
        currentBackgroundColor:'#ffff',
        currentFontColor:'#0000',
        customContent:'test',
        displayOption:'Above the default fields'

    },
    {
        enabled:true,
        name : 'Payment',
        stepTitle:'Payment',
        indexType: 'text',
        contentSettingsEnabled:true,
        currentBackgroundColor:'#ffff',
        currentFontColor:'#0000',
        customContent:'test',
        displayOption:'Below the default fields'

    }
]

tabs.forEach(tab => {
    tab.addEventListener('click',()=> {
        const target = document.querySelector(tab.dataset.tabTarget);
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active');
        })
        tabs.forEach(tab => {
            tab.classList.remove('active')
        })
        tab.classList.add('active')
        target.classList.add('active');
        modal.style.display = 'none';

    })
})



window.addEventListener('load',() => {

    const mini_header = document.createElement('div');
    mini_header.classList.add('mini_header');
    const mini_header_first_title = document.createElement('h1');
    const mini_header_second_title = document.createElement('h1');
    const mini_header_third_section = document.createElement('div');
    const mini_header_third_section_title = document.createElement('h1');
    const mini_header_third_section_icon = document.createElement('div');

    mini_header_third_section.classList.add('mini_header_third_section');
    mini_header_first_title.classList.add('title');
    mini_header_second_title.classList.add('title');
    mini_header_third_section_title.classList.add('title');
    mini_header_third_section.classList.add('add_button')



    mini_header_first_title.innerText = "Title";
    mini_header_second_title.innerText = "Display Index";
    mini_header_third_section_title.innerText = "Add new step"
    mini_header_third_section_icon.innerHTML = '<i class="fa-solid fa-circle-plus"></i>';

    mini_header_third_section.appendChild(mini_header_third_section_title)
    mini_header_third_section.appendChild(mini_header_third_section_icon)

    mini_header.appendChild(mini_header_first_title);
    mini_header.appendChild(mini_header_second_title);
    mini_header.appendChild(mini_header_third_section)

    tabContents[0].appendChild(mini_header);
    
    mini_header_third_section.addEventListener('click',() => {
        modal.style.display = 'flex';
        modal_title.innerHTML = 'Add new Step';
        save_button_title.innerText = "Save ";
        reset_button_title.innerText = 'Cancel';
        modal_input_1.value = "";
        modal_input_2.value = "";
        modal_custom_content_input.value = "";
        color_picker_1.defaultValue = "#ffff";
        modal_check_1.checked = true;
        enable_button.checked = true;
        position.selectedIndex = 0;
        content_settings_checkbox.checked == false;
        color_picker_2.defaultValue = '#0000';
        color_picker_1.value = "#ffff";
        color_picker_2.value = "#0000";
        hex_code_1.textContent = "#ffff";
        hex_code_2.textContent = "#0000";
        
    });

    closeBtn.addEventListener('click',() => {
        modal.style.display = 'none';
        checkout_step_title.style.color = 'black'
        
    })

    hex_code_1.textContent = '#ffff';
    hex_code_2.textContent = '#0000';
    color_picker_1.defaulValue = '#ffff';
    color_picker_1.addEventListener('input',() => {
        let code = color_picker_1.value;
        hex_code_1.textContent = code;
    })
    color_picker_2.addEventListener('input',() => {
        let code = color_picker_2.value;
        hex_code_2.textContent = code;
    })
   


   steps.map((item,index) => {
    const checkout_step = document.createElement('div');
    const checkout_step_title = document.createElement('h3');
    const step_index = document.createElement('h3');
    const step_icons_container =  document.createElement('div');
    const edit_icon = document.createElement('span');

    checkout_step.classList.add('step');
    step_index.classList.add('index')
    step_icons_container.classList.add('icon_row')



    const switch_button = document.createElement('div');
    switch_button.style.width = '100px'
    switch_button.style.height = '50px'
    const input = document.createElement('input')
    input.setAttribute('type','checkbox');
    input.setAttribute('id', `enable-${index}`);
    const label = document.createElement('label')
    label.setAttribute('for',`enable-${index}`)
    input.checked = item.enabled == true?true:false;
    switch_button.appendChild(input)
    switch_button.appendChild(label)
    edit_icon.innerHTML = '<i class="fa-solid fa-square-pen"></i>';
    edit_icon.style.marginLeft = '10px'
    step_icons_container.appendChild(switch_button)
    step_icons_container.appendChild(edit_icon)
    step_index.textContent = index + 1;

    checkout_step.appendChild(checkout_step_title);
    checkout_step.appendChild(step_index);
    checkout_step.appendChild(step_icons_container)
    checkout_step_title.textContent = item.name;

    tabContents[0].appendChild(checkout_step);


    input.addEventListener('input',() => {
        item.enabled = input.checked;
    })

    edit_icon.addEventListener('click',() => {
        modal.style.display = 'flex';
        modal_title.innerHTML = 'Edit Step';
        save_button_title.innerText = "Save Changes";
        reset_button_title.innerText = 'Reset';
        modal_input_1.value = item.name;
        modal_input_2.value = item.stepTitle;
        modal_custom_content_input.value = item.customContent;
        color_picker_1.defaultValue = item.currentBackgroundColor;
        color_picker_2.defaultValue = item.currentFontColor;
        color_picker_1.value = item.currentBackgroundColor;
        color_picker_2.value = item.currentFontColor;
        hex_code_1.textContent = item.currentBackgroundColor;
        hex_code_2.textContent = item.currentFontColor;

        item.enabled?enable_button.checked = true:enable_button.checked = false;
        position.selectedIndex = item.displayOption == 'Above the default fields'?0:1;
        item.indexType == 'text'?modal_check_1.checked = true:modal_check_2.checked = true;
        item.contentSettingsEnabled?content_settings_checkbox.checked = true: content_settings_checkbox.checked = false;
        content_settings_checkbox.checked?color_input_section.style.display = 'flex':color_input_section.style.display = 'none';
        

    })

    save_button.addEventListener('click',() => {
        if(save_button_title.innerText == 'Save Changes'){
            if(modal_input_1.value && modal_input_2.value){
                steps[index].enabled = enable_button.checked == true?true:false;
                steps[index].name = modal_input_1.value??'';
                steps[index].stepTitle = modal_input_2.value??'';
                steps[index].indexType = modal_check_1.checked == true?'text':'icon';
                steps[index].contentSettingsEnabled = content_settings_checkbox.checked == true?true:false
                steps[index].currentBackgroundColor = content_settings_checkbox.checked == true? color_picker_1.value:'white';
                steps[index].currentFontColor = content_settings_checkbox.checked == true? color_picker_2.value:'#0000';
                steps[index].customContent = modal_custom_content_input.value??'';
                steps[index].displayOption = position.selectedIndex == 0?"Above the default fields":"Below the default fields";
                modal.style.display = 'none';
                checkout_step_title.innerText = modal.value;

                console.log(item)
            }
            else {
                alert('please enter the details')
                modal.style.display = 'none';
            }

        }
        else if(save_button_title.innerText == 'Save'){
            if(modal_input_1.value && modal_input_2.value){
                steps.push({
                    enabled:enable_button.checked == true?true:false,
                    name:modal_input_1.value,
                    stepTitle:modal_input_2.value,
                    indexType:modal_check_1.checked == true?'text':'icon',
                    contentSettingsEnabled:content_settings_checkbox.checked == true?true:false,
                    currentBackgroundColor:content_settings_checkbox.checked == true? color_picker_1.value:'white',
                    currentFontColor:content_settings_checkbox.checked == true? color_picker_2.value:'#0000',
                    customContent:modal_custom_content_input.value,
                    displayOption:position.selectedIndex == 0?"Above the default fields":"Below the default fields"
                    
                });
                
                location.reload(true);
                modal.style.display = 'none';
            }
            else {
                !modal_input_1.value?modal_input_1.style.border = '2px solid red':modal_input_2.style.border = '2px solid red';
                modal.style.display = 'none';
            }
        }
    })

    reset_button.addEventListener('click',() => {
        if(reset_button_title.innerText == 'Reset'){
            item.enabled = true;
            item.name="",
            modal_input_1.value = '';
            modal_input_2.value = ''
            modal_custom_content_input.value = ''
            position.selectedIndex = 0;
            item.stepTitle="",
            item.indexType = 'text';
            item.contentSettingsEnabled = false;
            modal_check_1.checked = true;
            item.currentBackgroundColor = "#ffff";
            item.currentFontColor = '#0000';
            item.customContent = "",
            item.displayOption = "Above the default fields"
        }
        else if(reset_button_title.innerText == 'Cancel'){
            modal.style.display = 'none';
        }
    })


  
})

const indices = document.querySelectorAll('.index');
   indices.forEach(index => {
    index.addEventListener('click',()=> {
        index.classList.add('active-index')

        indices.forEach(index => {
            index.classList.remove('active-index')
        })
        index.classList.add('active-index')

    })
   })

   content_settings_checkbox.addEventListener('input',() => {
       if(content_settings_checkbox.checked){
        color_input_section.style.display = 'flex';
       }
       else {
        color_input_section.style.display = 'none';
       }
   })

})