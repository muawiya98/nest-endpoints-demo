import { Controller, Get, Header, Param, Post, Redirect, Body, Query, HttpStatus, Res } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';
import { Response } from 'express';

@Controller('cats')
export class CatsController {

  @Post()
  create(@Body() createCatDto: CreateCatDto, @Res() res: Response) {
    res.status(HttpStatus.CREATED).send(`This action adds a new cat ${createCatDto.breed}`);
  }
  
  @Get()
  async findAll(@Query('age') age: number, @Query('breed') breed: string, @Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK);
    return `This action returns all cats filtered by age: ${age} and breed: ${breed}`;
  }

  

  @Get(':id')
    findOne(@Param() params: any): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
}

}
