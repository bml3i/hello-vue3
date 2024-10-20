// 定义接口，限制Person的具体属性
export interface PersonInter {
    id:string,
    name:string,
    age:number
}

// 一个自定义类型
export type Persons = Array<PersonInter>

// 另外一种写法
// export type Persons = PersonInter[]