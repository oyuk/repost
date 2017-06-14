json.id post.id
json.content post.content
json.created_at l(post.created_at, format: :short)
json.created_on l(post.created_at.to_date, format: :short)
json.selected false
json.starred current_user.starred?(post)
json.user do
  json.screen_name post.user.screen_name
  json.name post.user.name
  json.avatar post.user.avatar
end
