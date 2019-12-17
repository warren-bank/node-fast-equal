'use strict';

const clone_obj = (obj_old) => {
  const obj_new = (Array.isArray(obj_old)) ? [] : {}
  for (let key in obj_old) {
    if (typeof obj_old[key] === 'object')
      obj_new[key] = clone_obj(obj_old[key])
    else
      obj_new[key] = obj_old[key]
  }
  return obj_new
}

const obj_d1 = {a: 'a'}
const obj_d2 = {a: {...obj_d1}, b: {...obj_d1}, c: {...obj_d1}}
const obj_d3 = {a: {...obj_d2}, b: {...obj_d2}, c: {...obj_d2}}
const obj_d4 = {a: {...obj_d3}, b: {...obj_d3}, c: {...obj_d3}}

const obj_d1_clone = clone_obj(obj_d1)
const obj_d2_clone = clone_obj(obj_d2)
const obj_d3_clone = clone_obj(obj_d3)
const obj_d4_clone = clone_obj(obj_d4)

const arr_d1 = ['a']
const arr_d2 = [[...arr_d1], [...arr_d1], [...arr_d1]]
const arr_d3 = [[...arr_d2], [...arr_d2], [...arr_d2]]
const arr_d4 = [[...arr_d3], [...arr_d3], [...arr_d3]]

const arr_d1_clone = clone_obj(arr_d1)
const arr_d2_clone = clone_obj(arr_d2)
const arr_d3_clone = clone_obj(arr_d3)
const arr_d4_clone = clone_obj(arr_d4)

const deep = [
  {
    description: 'objects',
    tests: [
      {
        description: '1 level deep',
        value1: obj_d1,
        value2: obj_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: obj_d2,
        value2: obj_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: obj_d3,
        value2: obj_d3_clone,
        equal: true
      },
      {
        description: '4 levels deep',
        value1: obj_d4,
        value2: obj_d4_clone,
        equal: true
      },
    ]
  },
  {
    description: 'arrays',
    tests: [
      {
        description: '1 level deep',
        value1: arr_d1,
        value2: arr_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: arr_d2,
        value2: arr_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: arr_d3,
        value2: arr_d3_clone,
        equal: true
      },
      {
        description: '4 levels deep',
        value1: arr_d4,
        value2: arr_d4_clone,
        equal: true
      },
    ]
  },
]

const reference = [
  {
    description: 'objects',
    tests: [
      {
        description: 'same instance',
        value1: obj_d1,
        value2: obj_d1,
        equal: true
      },
      {
        description: 'different instances',
        value1: obj_d1,
        value2: obj_d1_clone,
        equal: false
      },
    ]
  },
  {
    description: 'arrays',
    tests: [
      {
        description: 'same instance',
        value1: arr_d1,
        value2: arr_d1,
        equal: true
      },
      {
        description: 'different instances',
        value1: arr_d1,
        value2: arr_d1_clone,
        equal: false
      },
    ]
  },
]

const shallow_d1 = [
  {
    description: 'objects',
    tests: [
      {
        description: '1 level deep',
        value1: obj_d1,
        value2: obj_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: obj_d2,
        value2: obj_d2_clone,
        equal: false
      },
      {
        description: '3 levels deep',
        value1: obj_d3,
        value2: obj_d3_clone,
        equal: false
      },
      {
        description: '4 levels deep',
        value1: obj_d4,
        value2: obj_d4_clone,
        equal: false
      },
    ]
  },
  {
    description: 'arrays',
    tests: [
      {
        description: '1 level deep',
        value1: arr_d1,
        value2: arr_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: arr_d2,
        value2: arr_d2_clone,
        equal: false
      },
      {
        description: '3 levels deep',
        value1: arr_d3,
        value2: arr_d3_clone,
        equal: false
      },
      {
        description: '4 levels deep',
        value1: arr_d4,
        value2: arr_d4_clone,
        equal: false
      },
    ]
  },
]

const shallow_d2 = [
  {
    description: 'objects',
    tests: [
      {
        description: '1 level deep',
        value1: obj_d1,
        value2: obj_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: obj_d2,
        value2: obj_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: obj_d3,
        value2: obj_d3_clone,
        equal: false
      },
      {
        description: '4 levels deep',
        value1: obj_d4,
        value2: obj_d4_clone,
        equal: false
      },
    ]
  },
  {
    description: 'arrays',
    tests: [
      {
        description: '1 level deep',
        value1: arr_d1,
        value2: arr_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: arr_d2,
        value2: arr_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: arr_d3,
        value2: arr_d3_clone,
        equal: false
      },
      {
        description: '4 levels deep',
        value1: arr_d4,
        value2: arr_d4_clone,
        equal: false
      },
    ]
  },
]

const shallow_d3 = [
  {
    description: 'objects',
    tests: [
      {
        description: '1 level deep',
        value1: obj_d1,
        value2: obj_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: obj_d2,
        value2: obj_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: obj_d3,
        value2: obj_d3_clone,
        equal: true
      },
      {
        description: '4 levels deep',
        value1: obj_d4,
        value2: obj_d4_clone,
        equal: false
      },
    ]
  },
  {
    description: 'arrays',
    tests: [
      {
        description: '1 level deep',
        value1: arr_d1,
        value2: arr_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: arr_d2,
        value2: arr_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: arr_d3,
        value2: arr_d3_clone,
        equal: true
      },
      {
        description: '4 levels deep',
        value1: arr_d4,
        value2: arr_d4_clone,
        equal: false
      },
    ]
  },
]

const shallow_d4 = [
  {
    description: 'objects',
    tests: [
      {
        description: '1 level deep',
        value1: obj_d1,
        value2: obj_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: obj_d2,
        value2: obj_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: obj_d3,
        value2: obj_d3_clone,
        equal: true
      },
      {
        description: '4 levels deep',
        value1: obj_d4,
        value2: obj_d4_clone,
        equal: true
      },
    ]
  },
  {
    description: 'arrays',
    tests: [
      {
        description: '1 level deep',
        value1: arr_d1,
        value2: arr_d1_clone,
        equal: true
      },
      {
        description: '2 levels deep',
        value1: arr_d2,
        value2: arr_d2_clone,
        equal: true
      },
      {
        description: '3 levels deep',
        value1: arr_d3,
        value2: arr_d3_clone,
        equal: true
      },
      {
        description: '4 levels deep',
        value1: arr_d4,
        value2: arr_d4_clone,
        equal: true
      },
    ]
  },
]

module.exports = {deep, reference, shallow_d1, shallow_d2, shallow_d3, shallow_d4}
