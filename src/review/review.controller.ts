import { Body, Controller, Post } from '@nestjs/common';
import { ReviewService } from './review.service';
import { addReview } from './dto/add-review.dto';

@Controller('review')
export class ReviewController {
    constructor(private readonly reviewService: ReviewService){}

    @Post()
    addReview(@Body() review: addReview){
        return this.reviewService.addReview(review);
    }
}
