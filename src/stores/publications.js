const publications = [
    {
        title: 'Classification of Visual Perception EEG signals for a 2D platformer game',
        abstract: `This research focuses on classifying visual perception brain signals using an OpenBCI headset to capture the
                EEG signals from the participants. The headset comprises 16
                reconfigurable dry channels, which poses two challenges: the
                amount of data and high noise levels. The primary objective is
                to classify the intent of player movements in a 2D platformer
                game with a convolutional neural network. Since every player
                has a distinct EEG footprint for similar intents, we explore the
                process of training a global model suitable for many players.
                During the experimental setup, participants were instructed to
                navigate the player character within the game by solely relying
                on visual perception, simulating a realistic gaming environment.
                By leveraging existing EEG models such as EEGNet and
                ShallowConvNet, along with a newly designed 1D CNN model
                (Conv1D), the research compares the accuracy of these models on
                individual participant datasets and pooled datasets. The results
                reveal that the Conv1D model outperforms the other models,
                achieving high accuracy (100%) for all individual participants.
                Moreover, when the models are trained on pooled data, the
                Conv1D model retains its high accuracy, while the accuracy
                of the other models significantly decreases. However, when the
                model was tested on datasets from participants not included
                in the training phase, suboptimal results were observed, with
                a maximum accuracy of 41%.`,
        link: "http://conf.uni-obuda.hu/sisy2023/",
        file: "src/assets/Publications/Classification of Visual Perception EEG signals for a 2D platformer game.pdf"
    },
    {
        title: 'Evaluating a Conceptual Model for Measuring Gaming Experience: A Case Study of Stranded Away Platformer Game',
        abstract: `Video games have become a ubiquitous form of entertainment and have been enjoyed by people of all ages around 
            the world. The gaming industry has evolved rapidly, with new games being released every year that push the boundaries of 
            technology and creativity. To ensure that video games are not just technically advanced, but also enjoyable and engaging, 
            measuring the gaming experience is essential because it helps game designers understand how players interact with the game 
            and identify areas for its improvement. The objective of this paper is to examine an interplay of gaming experience 
            dimensions in the context of platform video games and to determine the extent to which they contribute to players' 
            behavioral intentions. To fulfil this objective, an empirical study was undertaken, involving participants with diverse 
            gaming backgrounds. They were requested to engage in the gameplay of the Stranded Away platformer game and subsequently 
            respond to a post-use questionnaire. The psychometric features of the introduced conceptual model were evaluated with the 
            partial least squares structural equation modeling (PLS-SEM) method. The reported findings demonstrate the importance of 
            evaluating different facets of the gaming experience in video games and showcase the potential of the proposed model and 
            measuring instrument as tools for game designers to enhance the overall quality of their products.`,
        link: "https://www.mdpi.com/2078-2489/14/6/350",
        file: "src//assets/Publications/Evaluating a Conceptual Model for Measuring Gaming Experience A Case Study of Stranded Away Platformer Game.pdf"
    },
    {
        title: 'Stranded Away: Implementation and User Experience Evaluation of an Indie Platformer Game Developed Using Unity Engine',
        abstract: `Platformer games have been a staple in the video game industry for decades, dating back to the early days of arcade 
            games such as Donkey Kong and Super Mario Bros. These games continue to be popular today and have evolved to include a wide 
            range of subgenres and gameplay styles. This paper introduces Stranded Away - an indie platformer game developed in the Unity 
            engine. The implemented game retains most of the main aspects of platformers, such as collectibles, moving platforms, 
            different types of enemies, and obstacles, along with puzzle video game elements such as solving riddles to progress. However, 
            the emphasis is placed on core game mechanics, namely player movement and puzzles, as well as tools we have developed to design 
            game levels more efficiently. An empirical study was conducted to examine the user experience of the introduced game. The sample 
            of study respondents consisted mainly of students who first played the game and then completed the post-use questionnaire. The 
            reported findings uncovered to which extent Stranded Away has met the requirements of relevant user experience dimensions.`,
        link: "https://ieeexplore.ieee.org/document/10159769",
        file: "src/assets/Publications/Stranded Away Implementation and User Experience Evaluation of an Indie Platformer Game Developed Using Unity Engine.pdf"
    },
    {
        title: 'Detection and Classification of Speech Bubbles in Comics Using Convolutional Neural Networks',
        abstract: `This study addresses the classification of speech bubbles in comic book images, a crucial step
            in automating the analysis of visual narratives. The research employs a custom process for detection 
            and extraction of speech bubbles. This is involved a multi-step process, including image
            preprocessing, OCR text recognition, grouping of text boxes, binary thresholding, and visualization. 
            Convolutional Neural Network (CNN) model is trained from scratch on a dataset comprising
            1000 comic book images, encompassing five distinct speech bubble categories. The model's demonstrates 
            significant test accuracy of approximately 95% after iterative fine-tuning. The study also
            navigates through challenges posed by unconventional speech bubble styles and limited dataset
            size. The findings present a robust foundation for advancing the automation of comic book analysis
            and hold promise for broader applications in visual narrative understanding.`,
        link: "https://zir.nsk.hr/islandora/object/unipu:7489",
        file: "src/assets/Publications/Detection and Classification of Speech Bubbles in Comics Using Convolutional Neural Networks.pdf"
    },
    {
        title: 'Comparison of Videgame Development Environments',
        abstract: `The current number of game development environments exceeds sixty-three (63) [1]. Most of these environments are open-source 
            software products maintained by various developer communities. Game development environments are also software tools that 
            facilitate the easier and faster creation of video games. However, deciding on a specific game development environment is 
            challenging because not all environments are the same. They use different programming languages, functionalities, and have varying 
            capabilities. Some environments are simpler and can be learned more quickly, while others are more complex and require more effort
            and time. Such uncertainties make it difficult for users, especially beginners, to choose a game development environment. 
            Therefore, this paper aims to address these uncertainties by comparing three popular game development environments - Unity, 
            Godot, and Unreal Engine. `,
        link: "https://zir.nsk.hr/islandora/object/unipu:7489",
        file: "src/assets/Publications/Comparison of Videgame Development Environments.pdf"
    },
]

export { publications };
