<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8 col-sm-10">
        <div class="my-4 d-flex align-items-center">
          <b-form-group label="語料">
            <b-form-radio-group
              id="radio-fixtures"
              v-model="fixture"
              :options="options"
              buttons
              button-variant="outline-primary"
            ></b-form-radio-group>
          </b-form-group>

          <div class="ml-auto">
            <button type="button" class="btn btn-primary"
              @click="reloadLorem">
              更新
            </button>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h3 class="card-title">
              {{ title }}
            </h3>

            <div class="article-content">
              {{ text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import uniqueRandomArray from 'unique-random-array';
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
      fixtures: [],
      options: [
        { text: '易經', value: 'iching' },
        { text: '三字經', value: 'san_zi_jing' },
      ],
      title: '',
      text: ''
    };
  },
  mounted() {
    this.loadLorem().then(() => {
      this.reloadLorem();
    });
  },
  methods: {
    reloadLorem() {
      this.title = this.randomText(2);
      this.text = this.randomText(100);
    },

    loadLorem() {
      return $.ajax(`./fixtures/${this.fixture}.json`)
        .done((res) => {
          this.fixtures = JSON.parse(res);
        });
    },

    randomText(num = 3) {
      const random = uniqueRandomArray(this.fixtures);
      const t = [];

      for (let i = 0; i < num; i++) {
        t.push(random());
      }

      return t.join('，');
    }
  },
  watch: {
    fixture(v) {
      this.loadLorem().then(() => {
        this.reloadLorem();
      });
    }
  }
};
</script>

<style scoped>

</style>
