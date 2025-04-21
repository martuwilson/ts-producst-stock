import {Table, Column, Model, DataType, Default, PrimaryKey, Unique, AllowNull} from 'sequelize-typescript';
import {v4 as uuidv4, validate} from 'uuid';
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

    @AllowNull(false)
    @Column({
        type: DataType.STRING(100),
        validate: {
            notEmpty:{
                msg: "Name cannot be empty",
            }
        },
    })
    declare name: string;

    @AllowNull(false)
    @Column({
        type: DataType.FLOAT,
        validate: {
            notEmpty:{
                msg: "Price cannot be empty",
            }
        },
    })
    declare price: number;

    @Default(true)
    @Column({
        type: DataType.BOOLEAN,
    })
    declare availability: boolean;
}

export default Product;