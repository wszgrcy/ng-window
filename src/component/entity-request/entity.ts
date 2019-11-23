import { Entity, EntityColumn, PrimaryColumn, OneToOne, ManyToOne, Source, OneToMany } from 'cyia-ngx-common'

@Entity({
    request: {
        url: 'assets/mock/main.json'
    }
})
export class MainEntity {
    @PrimaryColumn()
    id: string
    @ManyToOne(() => ManyToOneEntity, (type) => 'id')
    manyToOne: ManyToOneEntity
    name: string
    @EntityColumn(() => JsonEntity)
    jsonObj: JsonEntity
}
@Entity({
    request: {
        url: 'assets/mock/manytoone.json'
    }
})
export class ManyToOneEntity {
    @PrimaryColumn()
    id: string
    name: string
}
// @Entity({
//     request: {
//         url: 'assets/mock/onetomany.json'
//     },
    
// })
// export class OneToManyEntity {
//     @PrimaryColumn()
//     id: string
//     name: string
//     mainId: string
// }

@Entity({ method: Source.structure })
export class JsonEntity {
    data: number
    name: string
}