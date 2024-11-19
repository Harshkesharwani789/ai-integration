import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class PromptService {
  async getPromptResponse(prompt: string) {
    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCigrN47mic35N71_0ya9kgg8f3RF3fbHY`,
      {
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
    );
    return {
      message: response.data.candidates[0].content.parts[0].text,
    };
  }
}
