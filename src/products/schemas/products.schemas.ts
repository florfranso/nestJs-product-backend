import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Product{
    @Prop({required: true})
    nombre: string;

    @Prop({required: true})
    precio: number;

    @Prop()
    imagen: string;
}

export type ProductDocument = HydratedDocument<Product>;

export const productSchema = SchemaFactory.createForClass(Product)