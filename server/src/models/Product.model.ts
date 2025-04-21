import {Table, Column, Model, DataType} from 'sequelize-typescript';

// Decorator to define the Product model
@Table({
    tableName: 'products',
    timestamps: true,
})

class Product extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    name: string;

    @Column({
        type: DataType.FLOAT,
    })
    price: number;

    @Column({
        type: DataType.BOOLEAN,
    })
    availability: boolean;
}

export default Product;