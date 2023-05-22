import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    async create(@Body() createProductDto: CreateProductDto) {
        try {
            const productCreated = await this.productsService.create(createProductDto);
            return { status: 'success', data: productCreated }
        } catch (error) {
            return { status: 'error', message: error.message }
        }

    }

    @Get()
    async findAll() {
        try {
            const products = await this.productsService.findAll()
            return { status: 'success', data: products };
        } catch (error) {
            return { status: 'error', message: error.message }
        }
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        try {
            const productById = await this.productsService.findOne(id)
            return { status: 'success', data: productById }
        } catch (error) {
            return { status: 'error', message: error.message }
        }
        ;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
        try {
            await this.productsService.update(id, updateProductDto);
            return { status: 'success', message: 'producto actualizado' }
        } catch (error) {
            return { status: 'error', message: error.message }
        }
    }

    @Delete(':id')
    async remove(@Param('id') id: string) {
        try {
            await this.productsService.remove(id);
            return { status: 'success', message: 'producto borrado' }
        } catch (error) {
            return { status: 'error', message: error.message }
        };
    }
}
