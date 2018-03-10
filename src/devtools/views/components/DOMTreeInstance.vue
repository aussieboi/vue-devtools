<template>
      <span class="content dom" :style="{ paddingLeft: depth * 15 + 'px' }">
        <!-- arrow wrapper for better hit box -->
        <!-- <span class="content dom" v-for="(child, key) in item" :key="key"> -->
          <span class="angle-bracket">&lt;  </span>
            <span class="item-name">{{ name }}  {{ attrName + '="'+ attrValue +'"' }}</span>
          <span class="angle-bracket">&gt;</span>
    
          <span class="angle-bracket">&lt;&#47;</span>
            <span class="item-name">{{  name }}</span>
          <span class="angle-bracket">&gt;</span>
       <!--  </span> -->
     <!--      <component-instance
        v-for="child in sortedChildren"
        :key="child.id"
        :instance="child"
        :depth="depth + 1">
      </component-instance> -->
      </span>
</template>
<script>
import * as _ from 'lodash';
export default {
  name: 'DomInstance',
  props: {
    item: null,
    depth: Number
  },
  created() {
    // expand root by default
    if (this.depth === 0) {
      this.expand();
    }
    this.propType();
  },
  methods: {
    propType() {
      if (this.depth == 1) {
        console.log('sadffasfasf');
        console.log(this.item);
        console.log('sadffasfasf');
      }
    }
  },
  computed: {
    name() {
      let name = Object.keys(this.item);
      name = name.toString(name);
      return name;
    },
    attrName() {
      console.log(_.flatMap(Object.values(this.item)));
      console.log(_.flatMap(Object.values(this.item))[0]);
      if (_.flatMap(Object.values(this.item))[0].hasOwnProperty('_attributes')) {
        return Object.keys(_.flatMap(Object.values(this.item))[0]._attributes).toString();
      }
    },
    attrValue() {
      if (_.flatMap(Object.values(this.item))[0].hasOwnProperty('_attributes')) {
        return Object.values(_.flatMap(Object.values(this.item))[0]._attributes).toString();
      }
    },
    child() {},
    content() {}
  },
  filters: {
    json: value => {
      return JSON.stringify(value, null, 2);
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '../../variables';

.instance {
    font-family: Menlo, Consolas, monospace;

    &.inactive {
        opacity: 0.5;
    }
}

.self {
    cursor: pointer;
    position: relative;
    overflow: hidden;
    z-index: 2;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    height: 22px;
    white-space: nowrap;
    display: flex;
    align-items: center;
    padding-right: 6px;

    &:hidden {
        display: none;
    }
}

.children {
    position: relative;
    z-index: 1;
}

.content {
    position: relative;
    padding-left: 22px;

    &.dom {
        font-size: 12px;
    }
}

.info {
    color: #fff;
    font-size: 10px;
    padding: 3px 5px 2px;
    display: inline-block;
    line-height: 10px;
    border-radius: 3px;
    position: relative;
    top: -1px;

    &.console {
        color: #fff;
        background-color: transparent;
        top: 0px;
    }

    &.router-view {
        background-color: #ff8344;
    }

    &.fragment {
        background-color: #b3cbf7;
    }

    &.inactive {
        background-color: #aaa;
    }

    &:not(.console) {
        margin-left: 6px;
    }
}

.arrow-wrapper {
    position: absolute;
    display: inline-block;
    width: 16px;
    height: 16px;
    top: 1px;
    left: 4px;
}

.arrow {
    position: absolute;
    top: 5px;
    left: 4px;
    transition: transform 0.1s ease;

    &.rotated {
        transform: rotate(90deg);
    }
}

.angle-bracket {
    color: $darkerGrey;
}

.item-name {
    color: $component-color;
    margin: 0 1px;
}

.spacer {
    flex: 100% 1 1;
    width: 0;
}

.icon-button {
    font-size: 16px;

    .self:not(:hover) & {
        visibility: hidden;
    }

    .self.selected & >>> svg {
        fill: $white;
    }
}
</style>
