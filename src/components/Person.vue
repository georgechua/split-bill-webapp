<template>
<div class="person-table" style="text-align:left;">
  <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
  <thead>
    <tr>
      <th class="mdl-data-table__cell--non-numeric">Name</th>
      <th style="text-align:center">Price Before Tax</th>
      <th>Tax Amount</th>
      <th style="text-align:center">Price After Tax</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">Jared</td>
      <td>
            <form action="#">
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1" style="width:100px">
                    <label class="mdl-textfield__label" for="sample1"></label>
                </div>
            </form>
        </td>
      <td>$2.90</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">John</td>
      <td>
           <form action="#">
                <div class="mdl-textfield mdl-js-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1" style="width:100px">
                    <label class="mdl-textfield__label" for="sample1"></label>
                </div>
            </form> 
      </td>
      <td>$10.25</td>
    </tr>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">George</td>
      <td>
          <form action="#">
                <div class="mdl-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1" style="width:100px">
                    <label class="mdl-textfield__label" for="sample1"></label>
                </div>
            </form>
      </td>
      <td><form action="#">
                <div class="mdl-textfield">
                    <input class="mdl-textfield__input" type="text" id="sample1" placeholder="tax" >
                    <label class="mdl-textfield__label" for="sample1"></label>
                </div>
            </form></td>
    </tr>
  </tbody>
</table>
</div>
</template>


<script>
export default {

}
</script>


<style>


</style>