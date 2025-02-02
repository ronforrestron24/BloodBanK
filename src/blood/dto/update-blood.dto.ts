import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class UpdateBloodDto {
    @Field()
    name: string;

    @Field()    
    reasonOfUse: string;

    @Field()
    dateUsed: Date;
}