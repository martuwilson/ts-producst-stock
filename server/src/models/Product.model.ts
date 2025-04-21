import {Table, Column, Model, DataType, Default, PrimaryKey, Unique} from 'sequelize-typescript';
import {v4 as uuidv4} from 'uuid';
// Decorator to define the Product model
@Table({
    tableName: 'products',
    timestamps: true,
})

class Product extends Model {

    @PrimaryKey
    @Unique
    @Column({
        type: DataType.UUID,
        defaultValue: uuidv4,
        allowNull: false,
    })
    declare id: string;

    @Column({
        type: DataType.STRING(100)
    })
    name: string;

    @Column({
        type: DataType.FLOAT,
    })
    price: number;

    @Default(true)
    @Column({
        type: DataType.BOOLEAN,
    })
    availability: boolean;
}

export default Product;