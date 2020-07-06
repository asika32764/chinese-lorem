<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-sm-10">
        <div class="my-4">
          <b-form-group label="語料">
            <b-form-radio-group
              id="radio-fixtures"
              v-model="fixture"
              :options="options"
              buttons
              button-variant="outline-primary"
            ></b-form-radio-group>
          </b-form-group>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title">

            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import { BFormRadioGroup, BFormGroup } from 'bootstrap-vue';

export default {
  name: 'app',
  components: {
    BFormGroup,
    'b-form-radio-group': BFormRadioGroup
  },
  data() {
    return {
      fixture: 'iching',
      options: [
        { text: '易經', value: 'iching' },
        { text: '三字經', value: 'san_zi_jing' },
      ],
      title: '',
      text: ''
    };
  },
  mounted() {

  },
  methods: {
    loadLorem() {
      $.ajax(`./${this.fixture}.json`)
        .done((res) => {
          console.log();
        });
    }
  },
  watch: {
    fixture(v) {

    }
  }
};
</script>

<style scoped>

</style>
