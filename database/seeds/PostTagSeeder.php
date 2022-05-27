<?php

use Illuminate\Database\Seeder;
use Faker\Generator as Faker;
use App\Tag;
use App\Post;
class PostTagSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run(Faker $faker)
    {
        $posts = Post::all();
        foreach($posts as $post ) {
            $tagsPost = Tag::inRandomOrder()->limit(rand(0, 5))->get();
            $post->tags()->attach($tagsPost->pluck('id')->all());
        }

    }
}
