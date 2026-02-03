BeatHub Design Document
1. Data Relationships
Artist: Parent entity that represents a music creator.
Album: References an Artist and groups related songs.
Song: References both Album and Artist for flexible querying.
User: Independent entity representing application users.
Playlist: References a User and contains an array of Song references.
2. Design Decisions
Why did you reference Songs in the Playlist instead of embedding them?
Songs are referenced instead of embedded to avoid data duplication. If a song’s details (such as title or duration) change, all playlists referencing that song automatically reflect the update. Embedding songs would require updating every playlist document individually, which does not scale well.

Why did you reference the Artist in the Song model?
Referencing the Artist directly in the Song model enables efficient queries such as “find all songs by a specific artist” without needing to traverse albums first. This improves query performance and simplifies backend logic.