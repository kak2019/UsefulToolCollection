import React from 'react';





function Select (){
    document.addEventListener('DOMContentLoaded', function () {
        var data = [
            { id: "114919", name: "UD-H2B", service: "UD- H2B - UD- How to Buy" },
            // 这里可以添加更多的数据
        ];

        var dropdown = document.getElementById('dropdown');

        data.forEach(function (item) {
            var option = document.createElement('option');
            option.value = item.id;
            option.textContent = item.name;
            dropdown.appendChild(option);
        });
    });

    // function showDetails() {
    //     var data = [
    //         { id: "114919", name: "UD-H2B", service: "UD- H2B - UD- How to Buy" },
    //         // 同样的数据，用于查找和显示
    //     ];
    //
    //     var selectedId = document.getElementById('dropdown').value;
    //     var detailsDiv = document.getElementById('details');
    //
    //     var selectedItem = data.find(item => item.id === selectedId);
    //     if (selectedItem) {
    //         detailsDiv.innerHTML = 'Name: ' + selectedItem.name + '<br>Service: ' + selectedItem.service;
    //     } else {
    //         detailsDiv.innerHTML = '';
    //     }
    // }


    return(
        <>
<select id="dropdown" onChange="showDetails()">
    <option value="">Select an option</option>

</select>
<div id="details">

</div>
        </>
)
}
export default Select