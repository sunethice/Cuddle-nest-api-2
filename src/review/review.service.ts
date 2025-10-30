import { Injectable } from '@nestjs/common';
import { addReview } from './dto/add-review.dto';

@Injectable()
export class ReviewService {

    addReview(review: addReview){
        return "";
    }
}
