"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Video = void 0;
const user_entity_1 = require("../user/user.entity");
const typeorm_1 = require("typeorm");
const category_video_entity_1 = require("../category-video/category-video.entity");
let Video = class Video extends typeorm_1.BaseEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Video.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Video.prototype, "video", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", String)
], Video.prototype, "title", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Video.prototype, "preview", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Video.prototype, "bigImg", void 0);
__decorate([
    typeorm_1.Column({ nullable: false }),
    __metadata("design:type", Number)
], Video.prototype, "price", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Video.prototype, "description", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], Video.prototype, "level", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.User, (user) => user.videos),
    __metadata("design:type", user_entity_1.User)
], Video.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToMany(() => category_video_entity_1.CategoryVideoEntity, (CategoryVideo) => CategoryVideo.video),
    __metadata("design:type", Array)
], Video.prototype, "CategoryVideo", void 0);
Video = __decorate([
    typeorm_1.Entity()
], Video);
exports.Video = Video;
//# sourceMappingURL=video.entity.js.map