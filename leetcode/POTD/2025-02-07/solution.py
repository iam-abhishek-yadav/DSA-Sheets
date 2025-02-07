class Solution:
    def queryResults(self, limit: int, queries: list[list[int]]) -> list[int]:
        result = []
        ball_to_color = {}  
        color_count = Counter()  

        for ball_id, new_color in queries:
            if ball_id in ball_to_color:
                previous_color = ball_to_color[ball_id]
                color_count[previous_color] -= 1
                if color_count[previous_color] == 0:
                    del color_count[previous_color]  

            ball_to_color[ball_id] = new_color
            color_count[new_color] += 1

            result.append(len(color_count))

        return result
